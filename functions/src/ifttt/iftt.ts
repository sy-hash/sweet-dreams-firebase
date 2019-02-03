import axios from "axios";
import { defaultConfig } from "../config/index";

export const requestTweet = function(message: string) {
  const url: string = defaultConfig.iftttWebhookUrl;
  return new Promise<boolean>((resolve, reject) => {
    return axios
      .post(url, { value1: message })
      .then(res => {
        console.log("tweeted");
        resolve(true);
      })
      .catch(err => {
        console.log("error");
        reject(err);
      });
  });
};
