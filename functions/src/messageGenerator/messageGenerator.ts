import { Sleep } from "../fitbit";
import * as moment from "moment";

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
  const message = `昨日は${startTimeText}に寝て、${endTimeText}に起きたよ。${sleepTimeText}の睡眠だよ。（実際に寝てたのは${actualAsleepTimeText}だよ）`;
  return message;
};
