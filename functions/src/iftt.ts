import * as request from "request";
import { defaultConfig } from "./config/index";

export class Ifttt {
  requestTweet(message: string, callback: Function) {
    const url: string = defaultConfig.iftttWebhookUrl;
    const option = {
      url: url,
      json: { value1: message }
    };
    request.get(option, (error: Error, response, body: any) => {
      return callback();
    });
  }
}
