// import * as request from "request";
import axios from "axios";
import { defaultConfig } from "../config/index";

export interface FitbitErrorResponse {
  success: boolean;
  errors: [FitbitError];
}

export type fitbitErrorType = "expired_token" | "invalid_token";

export interface FitbitError {
  errorType: fitbitErrorType;
  fieldName: string;
  message: string;
}

export interface SleepResponse {
  sleep: [Sleep];
}

export interface Sleep {
  logId: number;
  date: string;
  duration: number;
  startTime: Date;
  endTime: Date;
  minutesAsleep: number;
  minutesAwake: number;
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

export const getNewToken = function(refreshToken: string) {
  const url = "https://api.fitbit.com/oauth2/token";
  const token = `Basic ${defaultConfig.fitbitAuthHeaderBasic}`;
  console.log("start: refresh token request");
  return axios
    .post<TokenResponse>(
      url,
      {},
      {
        params: {
          grant_type: "refresh_token",
          refresh_token: refreshToken
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: token
        }
      }
    )
    .then(res => {
      return new Promise<TokenResponse>((resolve, reject) => {
        // console.log(
        //   `access_token=${res.data.access_token}
        //   refresh_token=${res.data.refresh_token}`
        // );
        resolve(res.data);
      });
    });
};

export const getLastSleep = function(token: string) {
  const url = "https://api.fitbit.com/1.2/user/-/sleep/list.json";
  const axiosRequest = axios.get<SleepResponse & FitbitError>(url, {
    params: {
      beforeDate: "2019-12-31",
      offset: 0,
      limit: 1,
      sort: "desc"
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return new Promise<Sleep>((resolve, reject) => {
    return axiosRequest
      .then(res => {
        resolve(res.data.sleep[0]);
      })
      .catch(err => {
        const fitbitError: FitbitErrorResponse = err.response.data;
        reject(fitbitError.errors[0]);
      });
  });
};
