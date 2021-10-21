import fs from "fs";
import { formatParagraph } from "../format.text";
import { parseWords } from "../lib/parameter.utils";
import { toMapOfReplaceWords } from "../generate.word.parms";
import { replaceWords } from "../search.replace.words";
import { Alignment, FormatTextParms, RawParameters, Spacing } from "../types";

export function parseAlignment(alignment: string) {
  switch (alignment) {
    case "left":
      return Alignment.left;
    case "right":
      return Alignment.right;
    case "center":
      return Alignment.center;
  }
}

export function parseSpacing(spacing: string) {
  return spacing === "single" ? Spacing.single : Spacing.double;
}

export function buildParagraph(text: string, mapOfWords: Map<string, string>) {
  return function (formatTextParms: FormatTextParms) {
    formatTextParms.text = replaceWords(text, mapOfWords);
    return formatParagraph(formatTextParms);
  };
}

export function parseParameters(rawParameters: RawParameters) {
  const spacing = parseSpacing(rawParameters._spacing);
  return {
    readStreamInterface: {
      input: fs.createReadStream(rawParameters.fileName),
      output: process.stdout,
      terminal: false,
    },
    chuckNorrisWords: parseWords(rawParameters.chuckNorrisFFS.trim()),
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
