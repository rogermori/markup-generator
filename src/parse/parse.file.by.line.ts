import readline from "readline";
import { RawParameters } from "../types";
import { matchParagraph } from "../search.replace.words";
import { buildParagraph, parseParameters } from "./parse.utils";

export function parseInputFileByLine(
  rawParameters: RawParameters,
  chuckNorrisRandomWords: string
) {
  return new Promise<string>((resolve) => {
    const listOfParagraphs: string[] = [];
    const {
      readStreamInterface,
      spacing,
      formatTextParms,
      mapOfReplaceWords,
      chuckNorrisWords,
    } = parseParameters(rawParameters);
    readline
      .createInterface(readStreamInterface)
      .on("line", (line) => {
        line &&
          listOfParagraphs.push(
            buildParagraph(line, mapOfReplaceWords)(formatTextParms)
          );
        if (matchParagraph(chuckNorrisWords, line)) {
          listOfParagraphs.push(
            buildParagraph(
              chuckNorrisRandomWords,
              mapOfReplaceWords
            )(formatTextParms)
          );
        }
      })
      .on("close", () => {
        resolve(listOfParagraphs.join(spacing));
      });
  });
}
