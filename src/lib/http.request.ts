import { IncomingMessage } from "http";
import https, { RequestOptions } from "https";
import { randomWordsAPI } from "../config/index";

export function fetchChuckNorrisWords(
  timeout: number = 1500,
  numberOfRetries: number = 3
): Promise<string> {
  return new Promise((resolve, reject) => {
    const requestOptions: RequestOptions = {
      ...randomWordsAPI,
      timeout,
      method: "GET",
    };
    let numberOfTries = 0;
    const errorHandler = (err: Error, reject: Function) => {
      console.error(err.stack);
      if (numberOfTries >= numberOfRetries) {
        return reject(err);
      }
      sendRequest();
    };

    const sendRequest = () => {
      numberOfTries++;
      const request = https.request(requestOptions, (res: IncomingMessage) => {
        let responseString = "";
        res
          .on("data", (data: string) => (responseString += data))
          .on("end", () => {
            const { statusCode } = res;
            if (statusCode === 429 || (500 <= statusCode && statusCode < 600)) {
              return errorHandler(
                new Error(`Server Error : ${statusCode}`),
                reject
              );
            }
            resolve(JSON.parse(responseString)["value"]);
          });
      });
      request.end();
      request.on("error", errorHandler);
    };
    sendRequest();
  });
}
