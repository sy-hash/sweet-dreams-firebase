import * as generator from "./messageGenerator";
import { Sleep } from "../fitbit";

test("generateMessage()", () => {
  const dummySleep: Sleep = {
    logId: 0,
    date: "",
    duration: 0,
    startTime: new Date("2019-01-01T01:11:11.000"),
    endTime: new Date("2019-01-01T07:11:11.000"),
    minutesAsleep: 321,
    minutesAwake: 0
  };
  const result = generator.generateMessage(dummySleep);
  const expectedMessage = `昨日は01:11に寝て、07:11に起きたよ。6時間0分の睡眠だよ。（実際に寝てたのは5時間21分だよ）`;
  expect(result).toEqual(expectedMessage);
});
