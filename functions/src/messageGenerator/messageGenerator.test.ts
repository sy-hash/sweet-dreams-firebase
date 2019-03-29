import * as generator from "./messageGenerator";
import { Sleep } from "../fitbit";

test("generateMessage(): GoodSleep", () => {
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
  const expectedSleepInfoMessage = `昨日は01:11に寝て、07:11に起きたよ。6時間0分の睡眠だよ。（実際に寝てたのは5時間21分だよ）`;
  const expectedSpecialMessage = "よい睡眠できた！えらい！";
  expect(result).toEqual(
    expectedSleepInfoMessage + "\n" + expectedSpecialMessage
  );
});

test("generateMessage(): NormalSleep", () => {
  const dummySleep: Sleep = {
    logId: 0,
    date: "",
    duration: 0,
    startTime: new Date("2019-01-01T03:00:00.000"),
    endTime: new Date("2019-01-01T09:00:00.000"),
    minutesAsleep: 360,
    minutesAwake: 0
  };
  const result = generator.generateMessage(dummySleep);
  const expectedSleepInfoMessage = `昨日は03:00に寝て、09:00に起きたよ。6時間0分の睡眠だよ。（実際に寝てたのは6時間0分だよ）`;
  expect(result).toEqual(expectedSleepInfoMessage);
});

test("generateMessage(): 短い", () => {
  const dummySleep: Sleep = {
    logId: 0,
    date: "",
    duration: 0,
    startTime: new Date("2019-01-01T01:00:00.000"),
    endTime: new Date("2019-01-01T06:00:00.000"),
    minutesAsleep: 300,
    minutesAwake: 0
  };
  const result = generator.generateMessage(dummySleep);
  const expectedSleepInfoMessage = `昨日は01:00に寝て、06:00に起きたよ。5時間0分の睡眠だよ。（実際に寝てたのは5時間0分だよ）\n睡眠時間短いですよ〜`;
  expect(result).toEqual(expectedSleepInfoMessage);
});
