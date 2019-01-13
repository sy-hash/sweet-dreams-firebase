import * as functions from "firebase-functions";
import { Fitbit, FitbitErrorType, Sleep } from "./fitbit";
import { Ifttt } from "./iftt";
import { Datastore } from "./datastore";
import * as moment from "moment";

const dataStore = new Datastore();
const fitbit = new Fitbit();
const ifttt = new Ifttt();

export const helloWorld = functions.https.onRequest((request, response) => {
  const tweet = (sleep: Sleep, callback: () => any) => {
    const startTime = moment(sleep.startTime).format("HH:mm");
    const endTime = moment(sleep.endTime).format("HH:mm");
    const message = `昨日は${startTime}に寝て、${endTime}に起きたよ！`;
    ifttt.requestTweet(message, () => {
      callback();
    });
  };

  const fetchAndTweet = (token: string, refreshToken: string) => {
    fitbit.getLastSleep(token, (error, sleep) => {
      if (error !== null) {
        switch (error.type) {
          case FitbitErrorType.ExpiredToken:
            console.log("FitbitErrorType.ExpiredToken");
            fitbit.getToken(refreshToken, (erra, tokena, refTokena) => {
              if (erra !== null) {
                response.send(`refresh Token error`);
              } else {
                console.log(`token refreshed: ${tokena} ${refTokena}`);
                dataStore.writeToken(tokena, refTokena);
                fetchAndTweet(tokena, refTokena);
              }
            });
            return;
          case FitbitErrorType.InvalidToken:
            console.log("FitbitErrorType.InvalidToken");
            break;
          default:
            console.log("FitbitErrorType.Other");
            break;
        }
        response.send(`something went wrong!!!`);
        return;
      }
      dataStore.checkIsLoggedId(sleep.logId, isLogged => {
        if (isLogged) {
          response.send(`already tweeted!`);
        } else {
          tweet(sleep, () => {
            dataStore.writeLogId(sleep.logId);
            response.send(`tweeted!`);
          });
        }
      });
    });
  };

  dataStore.readToken((err, token, refreshToken) => {
    if (err !== null) {
      response.send(`Saved token is not found.`);
      return;
    }
    fetchAndTweet(token, refreshToken);
  });
});
