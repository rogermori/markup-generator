import https from "https";
import { config } from "../config/index";

export function httpGet() {
  return new Promise((resolve, reject) => {
    https
      .get(config.randomWordsAPI, (res) => {
        let responseString = "";
        res.on("data", (data: string) => {
          responseString += data;
        });
        res.on("end", () => {
          resolve(JSON.parse(responseString));
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}
