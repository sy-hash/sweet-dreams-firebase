export const JSON_STRING_ERROR = `{ 
  "success": false,
  "errors": [
    {
      "errorType": "expired_token",
      "message": "Access token invalid: hoghehoge." 
    }
  ]
}
`;

export const JSON_STRING_TOKEN = `{
  "access_token": "access_token",
  "expires_in": 3600,
  "refresh_token": "refresh_token",
  "token_type": "Bearer",
  "user_id": "26FWFL"
}
`;

export const JSON_STRING_SLEEPS = `
{
  "pagination": {
    "beforeDate": "2019-12-01",
    "limit": 3,
    "next": "https://api.fitbit.com/1.2/user/-/sleep/list.json?offset=3&limit=3&sort=desc&beforeDate=2019-12-01",
    "offset": 0,
    "previous": "",
    "sort": "desc"
  },
  "sleep": [
    {
      "dateOfSleep": "2019-01-22",
      "duration": 19200000,
      "efficiency": 88,
      "endTime": "2019-01-22T09:08:30.000",
      "infoCode": 0,
      "levels": {
        "data": [
          {
            "dateTime": "2019-01-22T03:48:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T03:49:00.000",
            "level": "light",
            "seconds": 1140
          },
          {
            "dateTime": "2019-01-22T04:08:00.000",
            "level": "deep",
            "seconds": 510
          },
          {
            "dateTime": "2019-01-22T04:16:30.000",
            "level": "light",
            "seconds": 1680
          },
          {
            "dateTime": "2019-01-22T04:44:30.000",
            "level": "rem",
            "seconds": 360
          },
          {
            "dateTime": "2019-01-22T04:50:30.000",
            "level": "wake",
            "seconds": 210
          },
          {
            "dateTime": "2019-01-22T04:54:00.000",
            "level": "light",
            "seconds": 390
          },
          {
            "dateTime": "2019-01-22T05:00:30.000",
            "level": "wake",
            "seconds": 330
          },
          {
            "dateTime": "2019-01-22T05:06:00.000",
            "level": "light",
            "seconds": 450
          },
          {
            "dateTime": "2019-01-22T05:13:30.000",
            "level": "deep",
            "seconds": 1530
          },
          {
            "dateTime": "2019-01-22T05:39:00.000",
            "level": "light",
            "seconds": 1290
          },
          {
            "dateTime": "2019-01-22T06:00:30.000",
            "level": "rem",
            "seconds": 690
          },
          {
            "dateTime": "2019-01-22T06:12:00.000",
            "level": "light",
            "seconds": 810
          },
          {
            "dateTime": "2019-01-22T06:25:30.000",
            "level": "deep",
            "seconds": 2160
          },
          {
            "dateTime": "2019-01-22T07:01:30.000",
            "level": "light",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-22T07:03:00.000",
            "level": "rem",
            "seconds": 2730
          },
          {
            "dateTime": "2019-01-22T07:48:30.000",
            "level": "light",
            "seconds": 2490
          },
          {
            "dateTime": "2019-01-22T08:30:00.000",
            "level": "wake",
            "seconds": 300
          },
          {
            "dateTime": "2019-01-22T08:35:00.000",
            "level": "light",
            "seconds": 840
          },
          {
            "dateTime": "2019-01-22T08:49:00.000",
            "level": "wake",
            "seconds": 630
          },
          {
            "dateTime": "2019-01-22T08:59:30.000",
            "level": "light",
            "seconds": 540
          }
        ],
        "shortData": [
          {
            "dateTime": "2019-01-22T03:48:30.000",
            "level": "wake",
            "seconds": 180
          },
          {
            "dateTime": "2019-01-22T03:53:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-22T03:56:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T04:16:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T04:34:00.000",
            "level": "wake",
            "seconds": 150
          },
          {
            "dateTime": "2019-01-22T04:39:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T04:58:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T06:10:00.000",
            "level": "wake",
            "seconds": 120
          },
          {
            "dateTime": "2019-01-22T06:14:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T06:16:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T07:00:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-22T07:04:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T07:08:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-22T07:13:30.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-22T07:39:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T07:49:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T07:53:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T07:58:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T08:02:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-22T08:37:00.000",
            "level": "wake",
            "seconds": 120
          },
          {
            "dateTime": "2019-01-22T08:46:00.000",
            "level": "wake",
            "seconds": 30
          }
        ],
        "summary": {
          "deep": {
            "count": 3,
            "minutes": 69,
            "thirtyDayAvgMinutes": 60
          },
          "light": {
            "count": 23,
            "minutes": 148,
            "thirtyDayAvgMinutes": 202
          },
          "rem": {
            "count": 7,
            "minutes": 58,
            "thirtyDayAvgMinutes": 53
          },
          "wake": {
            "count": 25,
            "minutes": 45,
            "thirtyDayAvgMinutes": 45
          }
        }
      },
      "logId": 20922076073,
      "minutesAfterWakeup": 0,
      "minutesAsleep": 275,
      "minutesAwake": 45,
      "minutesToFallAsleep": 0,
      "startTime": "2019-01-22T03:48:30.000",
      "timeInBed": 320,
      "type": "stages"
    },
    {
      "dateOfSleep": "2019-01-21",
      "duration": 22080000,
      "efficiency": 89,
      "endTime": "2019-01-21T08:55:00.000",
      "infoCode": 0,
      "levels": {
        "data": [
          {
            "dateTime": "2019-01-21T02:47:00.000",
            "level": "wake",
            "seconds": 840
          },
          {
            "dateTime": "2019-01-21T03:01:00.000",
            "level": "light",
            "seconds": 1080
          },
          {
            "dateTime": "2019-01-21T03:19:00.000",
            "level": "deep",
            "seconds": 360
          },
          {
            "dateTime": "2019-01-21T03:25:00.000",
            "level": "light",
            "seconds": 1530
          },
          {
            "dateTime": "2019-01-21T03:50:30.000",
            "level": "wake",
            "seconds": 270
          },
          {
            "dateTime": "2019-01-21T03:55:00.000",
            "level": "light",
            "seconds": 1140
          },
          {
            "dateTime": "2019-01-21T04:14:00.000",
            "level": "deep",
            "seconds": 2130
          },
          {
            "dateTime": "2019-01-21T04:49:30.000",
            "level": "light",
            "seconds": 450
          },
          {
            "dateTime": "2019-01-21T04:57:00.000",
            "level": "deep",
            "seconds": 1110
          },
          {
            "dateTime": "2019-01-21T05:15:30.000",
            "level": "light",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-21T05:17:00.000",
            "level": "rem",
            "seconds": 1410
          },
          {
            "dateTime": "2019-01-21T05:40:30.000",
            "level": "light",
            "seconds": 3870
          },
          {
            "dateTime": "2019-01-21T06:45:00.000",
            "level": "deep",
            "seconds": 420
          },
          {
            "dateTime": "2019-01-21T06:52:00.000",
            "level": "light",
            "seconds": 150
          },
          {
            "dateTime": "2019-01-21T06:54:30.000",
            "level": "rem",
            "seconds": 840
          },
          {
            "dateTime": "2019-01-21T07:08:30.000",
            "level": "light",
            "seconds": 4080
          },
          {
            "dateTime": "2019-01-21T08:16:30.000",
            "level": "rem",
            "seconds": 870
          },
          {
            "dateTime": "2019-01-21T08:31:00.000",
            "level": "light",
            "seconds": 570
          },
          {
            "dateTime": "2019-01-21T08:40:30.000",
            "level": "wake",
            "seconds": 600
          },
          {
            "dateTime": "2019-01-21T08:50:30.000",
            "level": "light",
            "seconds": 270
          }
        ],
        "shortData": [
          {
            "dateTime": "2019-01-21T03:25:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-21T03:37:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T03:42:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T03:45:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T03:47:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T04:02:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T04:07:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-21T05:14:00.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-21T05:28:30.000",
            "level": "wake",
            "seconds": 120
          },
          {
            "dateTime": "2019-01-21T06:00:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-21T06:06:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T06:18:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T06:27:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T06:50:30.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-21T06:59:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T07:03:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T07:06:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T07:21:00.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-21T07:26:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T07:31:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T07:39:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T08:05:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-21T08:27:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T08:30:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T08:34:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-21T08:53:30.000",
            "level": "wake",
            "seconds": 90
          }
        ],
        "summary": {
          "deep": {
            "count": 4,
            "minutes": 64,
            "thirtyDayAvgMinutes": 56
          },
          "light": {
            "count": 26,
            "minutes": 207,
            "thirtyDayAvgMinutes": 196
          },
          "rem": {
            "count": 8,
            "minutes": 48,
            "thirtyDayAvgMinutes": 57
          },
          "wake": {
            "count": 29,
            "minutes": 49,
            "thirtyDayAvgMinutes": 41
          }
        }
      },
      "logId": 20909354000,
      "minutesAfterWakeup": 0,
      "minutesAsleep": 319,
      "minutesAwake": 49,
      "minutesToFallAsleep": 0,
      "startTime": "2019-01-21T02:47:00.000",
      "timeInBed": 368,
      "type": "stages"
    },
    {
      "dateOfSleep": "2019-01-20",
      "duration": 21000000,
      "efficiency": 97,
      "endTime": "2019-01-20T11:12:30.000",
      "infoCode": 0,
      "levels": {
        "data": [
          {
            "dateTime": "2019-01-20T05:22:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T05:23:00.000",
            "level": "light",
            "seconds": 960
          },
          {
            "dateTime": "2019-01-20T05:39:00.000",
            "level": "deep",
            "seconds": 330
          },
          {
            "dateTime": "2019-01-20T05:44:30.000",
            "level": "light",
            "seconds": 510
          },
          {
            "dateTime": "2019-01-20T05:53:00.000",
            "level": "deep",
            "seconds": 720
          },
          {
            "dateTime": "2019-01-20T06:05:00.000",
            "level": "light",
            "seconds": 180
          },
          {
            "dateTime": "2019-01-20T06:08:00.000",
            "level": "rem",
            "seconds": 990
          },
          {
            "dateTime": "2019-01-20T06:24:30.000",
            "level": "light",
            "seconds": 3180
          },
          {
            "dateTime": "2019-01-20T07:17:30.000",
            "level": "deep",
            "seconds": 2340
          },
          {
            "dateTime": "2019-01-20T07:56:30.000",
            "level": "light",
            "seconds": 810
          },
          {
            "dateTime": "2019-01-20T08:10:00.000",
            "level": "rem",
            "seconds": 930
          },
          {
            "dateTime": "2019-01-20T08:25:30.000",
            "level": "wake",
            "seconds": 210
          },
          {
            "dateTime": "2019-01-20T08:29:00.000",
            "level": "light",
            "seconds": 4500
          },
          {
            "dateTime": "2019-01-20T09:44:00.000",
            "level": "wake",
            "seconds": 330
          },
          {
            "dateTime": "2019-01-20T09:49:30.000",
            "level": "light",
            "seconds": 450
          },
          {
            "dateTime": "2019-01-20T09:57:00.000",
            "level": "rem",
            "seconds": 1440
          },
          {
            "dateTime": "2019-01-20T10:21:00.000",
            "level": "light",
            "seconds": 1980
          },
          {
            "dateTime": "2019-01-20T10:54:00.000",
            "level": "rem",
            "seconds": 270
          },
          {
            "dateTime": "2019-01-20T10:58:30.000",
            "level": "light",
            "seconds": 120
          },
          {
            "dateTime": "2019-01-20T11:00:30.000",
            "level": "wake",
            "seconds": 720
          }
        ],
        "shortData": [
          {
            "dateTime": "2019-01-20T05:22:30.000",
            "level": "wake",
            "seconds": 150
          },
          {
            "dateTime": "2019-01-20T05:44:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T06:25:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-20T06:34:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-20T06:42:00.000",
            "level": "wake",
            "seconds": 120
          },
          {
            "dateTime": "2019-01-20T06:58:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T07:56:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T08:01:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T08:04:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T08:09:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T08:16:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T08:35:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-20T08:44:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T08:53:00.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-01-20T09:12:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T09:23:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-20T09:37:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-01-20T09:40:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T10:01:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T10:16:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T10:19:00.000",
            "level": "wake",
            "seconds": 120
          },
          {
            "dateTime": "2019-01-20T10:25:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-01-20T10:33:00.000",
            "level": "wake",
            "seconds": 30
          }
        ],
        "summary": {
          "deep": {
            "count": 3,
            "minutes": 56,
            "thirtyDayAvgMinutes": 0
          },
          "light": {
            "count": 25,
            "minutes": 196,
            "thirtyDayAvgMinutes": 0
          },
          "rem": {
            "count": 7,
            "minutes": 57,
            "thirtyDayAvgMinutes": 0
          },
          "wake": {
            "count": 26,
            "minutes": 41,
            "thirtyDayAvgMinutes": 0
          }
        }
      },
      "logId": 20897982363,
      "minutesAfterWakeup": 11,
      "minutesAsleep": 309,
      "minutesAwake": 41,
      "minutesToFallAsleep": 0,
      "startTime": "2019-01-20T05:22:30.000",
      "timeInBed": 350,
      "type": "stages"
    }
  ]
}
`;
