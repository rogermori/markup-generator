import readline from "readline";
import fs from "fs";
import { Alignment, FormatTextParms, RawParameters, Spacing } from "../types";
import { toMapOfReplaceWords } from "../parameters/generate.word.parms";
import { parseWords } from "../lib/parameter.utils";
import { replaceWords } from "../search.replace/search.replace.words";
import { formatParagraph } from "../format/format.text";

export function parseInputFileByLine(
  rawParameters: RawParameters,
  chuckNorrisRandomWords: string
) {
  return new Promise((resolve) => {
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

function matchParagraph(words: string[], paragraph: string): boolean {
  const setOfWords = new Set(parseWords(paragraph));
  return paragraph && words.every((word) => setOfWords.has(word));
}

function parseAlignment(alignment: string) {
  switch (alignment) {
    case "left":
      return Alignment.left;
    case "right":
      return Alignment.right;
    case "center":
      return Alignment.center;
  }
}

function parseSpacing(spacing: string) {
  return spacing === "single" ? Spacing.single : Spacing.double;
}

function buildParagraph(text: string, mapOfWords: Map<string, string>) {
  return function (formatTextParms: FormatTextParms) {
    formatTextParms.text = replaceWords(text, mapOfWords);
    return formatParagraph(formatTextParms);
  };
}

function parseParameters(rawParameters: RawParameters) {
  const spacing = parseSpacing(rawParameters._spacing);
  return {
    readStreamInterface: {
      input: fs.createReadStream(rawParameters.fileName),
      output: process.stdout,
      terminal: false,
    },
    chuckNorrisWords: parseWords(rawParameters.chuckNorrisFFS),
    mapOfReplaceWords: toMapOfReplaceWords(rawParameters),
    spacing,
    formatTextParms: {
      length: parseInt(rawParameters._lineWidth),
      spacing,
      alignment: parseAlignment(rawParameters._textAlignment),
      text: "",
    },
  };
}
