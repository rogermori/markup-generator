import https from "https";
import { randomWordsAPI } from "../config/index";

export function fetchChuckNorrisWords(): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(randomWordsAPI, (res) => {
      let responseString = "";
      res
        .on("data", (data: string) => (responseString += data))
        .on("end", () => resolve(JSON.parse(responseString)["value"]))
        .on("error", (err) => reject(err));
    });
  });
}
