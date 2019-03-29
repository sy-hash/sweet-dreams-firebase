import { Sleep } from "../fitbit";
import * as moment from "moment";

const getSpecialMessage = function(
  startTime: moment.Moment,
  endTime: moment.Moment,
  sleepTime: moment.Duration
) {
  if (
    startTime.hours() < 2 &&
    endTime.hours() < 8 &&
    sleepTime.asMinutes() >= 60 * 6
  ) {
    return "よい睡眠できた！えらい！";
  }
  if (sleepTime.asMinutes() < 60 * 6) {
    return "睡眠時間短いですよ〜";
  }
  return null;
};

export const generateMessage = function(sleep: Sleep) {
  const startTime = moment(sleep.startTime);
  const endTime = moment(sleep.endTime);
  const startTimeText = startTime.format("HH:mm");
  const endTimeText = endTime.format("HH:mm");
  const sleepTime = moment.duration(endTime.diff(startTime));
  const sleepTimeText = `${sleepTime.hours()}時間${sleepTime.minutes()}分`;

  const actualAsleepTime = moment.duration(sleep.minutesAsleep, "minutes");
  const actualAsleepTimeText = `${actualAsleepTime.hours()}時間${actualAsleepTime.minutes()}分`;

  // const message = `リリース前 テストだよ！`;
  const messageSleepInfo = `昨日は${startTimeText}に寝て、${endTimeText}に起きたよ。${sleepTimeText}の睡眠だよ。（実際に寝てたのは${actualAsleepTimeText}だよ）`;
  const specialMessage = getSpecialMessage(startTime, endTime, sleepTime);
  const message = (() => {
    if (specialMessage) {
      return messageSleepInfo + "\n" + specialMessage;
    } else {
      return messageSleepInfo;
    }
  })();
  return message;
};
