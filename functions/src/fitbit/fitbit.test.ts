import * as fitbit from "./";
import axios from "axios";
import * as data from "./fitbit_response";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("getLastSleep()", () => {
  const dummyResponse = { data: JSON.parse(data.JSON_STRING_SLEEPS) };
  mockedAxios.get.mockResolvedValue(dummyResponse);
  return fitbit
    .getLastSleep("token")
    .then(result => expect(result.logId).toEqual(20922076073));
});

test("getLastSleep(): in case of expired_token error", () => {
  const dummyResponse = {
    response: { data: JSON.parse(data.JSON_STRING_ERROR) }
  };
  mockedAxios.get.mockRejectedValue(dummyResponse);
  return fitbit.getLastSleep("token").catch(error => {
    expect((<fitbit.FitbitError>error).errorType).toEqual("expired_token");
  });
});

test("getNewToken()", () => {
  const dummyResponse = { data: JSON.parse(data.JSON_STRING_TOKEN) };
  mockedAxios.post.mockResolvedValue(dummyResponse);
  return fitbit
    .getNewToken("refresh_token")
    .then(result => expect(result.access_token).toEqual("access_token"));
});
