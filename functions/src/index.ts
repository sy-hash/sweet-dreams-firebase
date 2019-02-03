import * as functions from "firebase-functions";
import { start } from "./main";

export const helloWorld = functions.https.onRequest((request, response) => {
  start()
    .then(result => {
      if (result) {
        response.send(`tweeted!!!`);
      } else {
        response.send(`succeeded but doen not tweeted.`);
      }
    })
    .catch(err => {
      response.status(400).send(`error: ${err}`);
    });
});
