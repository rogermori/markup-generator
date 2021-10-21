import readline from "readline";
import fs from "fs";
import { RawParameters } from "../types";
import { toMapOfReplaceWords } from "../parameters/generate.word.parms";
import { parseWords } from "../lib/parameter.utils";

export function parseInputFileByLine(rawParameters: RawParameters) {
  return new Promise((resolve) => {
    const listOfParagraphs: string[] = [];
    const listOfReplaceWords = toMapOfReplaceWords(rawParameters);
    const chuckNorrisWords = parseWords(rawParameters.chuckNorrisFFS);
    console.log("Chuck Norris", JSON.stringify(chuckNorrisWords));
    readline
      .createInterface({
        input: fs.createReadStream(rawParameters.fileName),
        output: process.stdout,
        terminal: false,
      })
      .on("line", (line) => {
        if (matchParagraph(chuckNorrisWords, line)) {
          console.log("FOUND BABY BOOM", line);
        }
      })
      .on("close", () => {
        resolve("loco malo poto");
      });
  });
}

function matchParagraph(words: string[], paragraph: string): boolean {
  const setOfWords = new Set(parseWords(paragraph));
  return paragraph && words.every((word) => setOfWords.has(word));
}
