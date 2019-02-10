import * as ifttt from "./iftt";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const dummyResponse: any = { data: "ok" };
mockedAxios.post.mockResolvedValue(dummyResponse);

test("requestTweet()", () => {
  return ifttt
    .requestTweet("this is tweet text!!!")
    .then(result => expect(result).toEqual(true));
});
