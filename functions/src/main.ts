import * as functions from "firebase-functions";
import * as fitbit from "./fitbit/fitbit";
import * as ifttt from "./ifttt";
import { Datastore } from "./datastore";
import { generateMessage } from "./messageGenerator/messageGenerator";

const dataStore = new Datastore();

const getNewToken = async refreshToken => {
  const newTokens = await fitbit.getNewToken(refreshToken);
  await dataStore.writeToken(newTokens.access_token, newTokens.refresh_token);
  return newTokens.access_token;
};

const getLastSpeepFromFitbit = async () => {
  const [token, refreshToken] = await dataStore.readToken();
  let sleep: fitbit.Sleep = null;
  let tokenRefreshNeeded = false;
  try {
    sleep = await fitbit.getLastSleep(token);
  } catch (e) {
    const errorType = (<fitbit.FitbitError>e).errorType;
    if (errorType === "expired_token") {
      tokenRefreshNeeded = true;
    } else {
      throw new Error();
    }
  }
  if (tokenRefreshNeeded) {
    const newToken = await getNewToken(refreshToken);
    sleep = await fitbit.getLastSleep(newToken);
  }
  return sleep;
};

export const start = async () => {
  const sleep = await getLastSpeepFromFitbit();
  const exists = await dataStore.existsLoggedId(sleep.logId);
  if (exists === true) {
    return false;
  }
  const message = generateMessage(sleep);
  console.log(`message=${message}`);
  const tweetSucceeded = await ifttt.requestTweet(message);
  if (tweetSucceeded) {
    return await dataStore.writeLogId(sleep.logId);
  } else {
    return false;
  }
};
