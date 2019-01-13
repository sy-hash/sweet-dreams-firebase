import * as request from "request";
import { defaultConfig } from "./config/index";

export enum FitbitErrorType {
  ExpiredToken = 1,
  InvalidToken,
  Other
}

class FitbitError implements Error {
  public name = "FitbitError";
  public message = "message";
  public type: FitbitErrorType;
  constructor(type: string) {
    switch (type) {
      case "expired_token":
        this.type = FitbitErrorType.ExpiredToken;
        break;
      case "invalid_token":
        this.type = FitbitErrorType.InvalidToken;
        break;
      default:
        this.type = FitbitErrorType.Other;
        break;
    }
  }
}

export class Sleep {
  logId: number;
  date: string;
  duration: number;
  startTime: Date;
  endTime: Date;
  minutesAsleep: number;
  minutesAwake: number;

  constructor(json: any) {
    this.logId = json.logId;
    this.date = json.dateOfSleep;
    this.duration = json.duration;
    this.startTime = json.startTime;
    this.endTime = json.endTime;
    this.minutesAsleep = json.minutesAsleep;
    this.minutesAwake = json.minutesAwake;
  }
}

export class Fitbit {
  getToken(
    refreshToken: string,
    callback: (err: Error, token: string, refreshToken: string) => any
  ) {
    const url = "https://api.fitbit.com/oauth2/token";
    const token = `Basic ${defaultConfig.fitbitAuthHeaderBasic}`;
    const option = {
      url: url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token
      },
      qs: {
        grant_type: "refresh_token",
        refresh_token: refreshToken
      }
    };
    console.log("start: refresh token request");
    request.post(option, (error: Error, response, body: any) => {
      if (error !== null) {
        console.log("error", error);
        callback(error, null, null);
        return;
      }
      if (response.statusCode !== 200) {
        console.log("body", body);
        callback(new Error(), null, null);
        return;
      }
      const json = JSON.parse(body);
      console.log(
        "access_token",
        json.access_token,
        "refresh_token",
        json.refresh_token
      );
      if (json.access_token !== null && json.refresh_token !== null) {
        callback(null, json.access_token, json.refresh_token);
      } else {
        callback(new Error(), null, null);
      }
    });
  }

  getLastSleep(
    token: string,
    callback: (error: FitbitError, sleep: Sleep) => any
  ) {
    const url = "https://api.fitbit.com/1.2/user/-/sleep/list.json";
    const option = {
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      },
      qs: {
        beforeDate: "2019-12-01",
        offset: 0,
        limit: 1,
        sort: "desc"
      }
    };
    request.get(
      option,
      (error: Error, response: request.Response, body: any) => {
        if (response.statusCode !== 200) {
          console.error("status:", response.statusCode, "response:", body);
          if (response.statusCode === 401) {
            const jsona = JSON.parse(body);
            const errorType = jsona.errors[0].errorType;
            return callback(new FitbitError(errorType), null);
          }
          return callback(new FitbitError(""), null);
        }
        const json = JSON.parse(body);
        const jsonSleeps: Array<JSON> = json.sleep;
        const sleeps: Sleep[] = jsonSleeps.map(e => new Sleep(e));
        return callback(null, sleeps[0]);
      }
    );
  }
}
