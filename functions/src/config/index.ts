import * as dotenv from "dotenv";
import * as functions from "firebase-functions";

dotenv.config();

interface DefaultConfig {
  fitbitToken: string;
  iftttWebhookUrl: string;
  fitbitAuthHeaderBasic: string;
}

export const defaultConfig: DefaultConfig = {
  fitbitToken: process.env.FITBIT_API_TOKEN || "",
  iftttWebhookUrl:
    process.env.IFTTT_WEBHOOK_URL ||
    functions.config().default_service.ifttt_webhook_url,
  fitbitAuthHeaderBasic:
    process.env.FITBIT_AUTH_HEADER_BASIC ||
    functions.config().default_service.fitbit_auth_header_basic
};
