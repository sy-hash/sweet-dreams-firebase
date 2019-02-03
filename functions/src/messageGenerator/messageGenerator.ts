import { Sleep } from "../fitbit";
import * as moment from "moment";

export const generateMessage = function(sleep: Sleep) {
  const startTime = moment(sleep.startTime).format("HH:mm");
  const endTime = moment(sleep.endTime).format("HH:mm");
  const message = `昨日は${startTime}に寝て、${endTime}に起きたよ！`;
  // const message = `リリース前 テストだよ！`;
  return message;
};
