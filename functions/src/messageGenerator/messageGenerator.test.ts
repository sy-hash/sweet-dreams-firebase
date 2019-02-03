import * as generator from "./messageGenerator";
import { Sleep } from "../fitbit";

test("generateMessage()", () => {
  const dummySleep: Sleep = {
    logId: 0,
    date: "",
    duration: 0,
    startTime: new Date("2019-01-01T01:11:11.000"),
    endTime: new Date("2019-01-01T07:11:11.000"),
    minutesAsleep: 0,
    minutesAwake: 0
  };
  const result = generator.generateMessage(dummySleep);
  expect(result).toEqual("昨日は01:11に寝て、07:11に起きたよ！");
});
