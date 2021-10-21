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
    const mapOfReplaceWords = toMapOfReplaceWords(rawParameters);
    const chuckNorrisWords = parseWords(rawParameters.chuckNorrisFFS);
    const length = parseInt(rawParameters._lineWidth);
    const spacing = parseSpacing(rawParameters._spacing);
    const alignment = parseAlignment(rawParameters._textAlignment);

    readline
      .createInterface({
        input: fs.createReadStream(rawParameters.fileName),
        output: process.stdout,
        terminal: false,
      })
      .on("line", (line) => {
        if (line) {
          const replacedLine = replaceWords(line, mapOfReplaceWords);
          listOfParagraphs.push(
            formatParagraph({ text: replacedLine, alignment, spacing, length })
          );

          if (matchParagraph(chuckNorrisWords, line)) {
            const newLine = replaceWords(
              chuckNorrisRandomWords,
              mapOfReplaceWords
            );
            listOfParagraphs.push(
              formatParagraph({ text: newLine, alignment, spacing, length })
            );
          }
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
