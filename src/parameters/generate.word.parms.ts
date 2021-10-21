import { parseReplaceWords, parseWords } from "../lib/parameter.utils";
import {
  WordContract,
  MarkupStyle,
  ListOfWords,
  RawParameters,
} from "../types";

export const toMapOfReplaceWords = ({
  boldStrings,
  italicStrings,
  replaceStrings,
}: Partial<RawParameters>): Map<string, string> =>
  createMapOfReplaceWords({
    boldWords: parseWords(boldStrings),
    italicWords: parseWords(italicStrings),
    replaceWords: parseReplaceWords(replaceStrings),
  });

export function createReplacementWord({
  bold,
  italic,
  text,
  replaceWith,
}: WordContract): string {
  const markupStyle: MarkupStyle =
    bold && italic ? "***" : bold ? "**" : italic ? "_" : "";
  return `${markupStyle}${replaceWith ?? text}${markupStyle}`;
}

export function createMapOfReplaceWords({
  boldWords,
  italicWords,
  replaceWords,
}: ListOfWords): Map<string, string> {
  const setOfBoldWords = _createSet(boldWords);
  const setOfItalicWords = _createSet(italicWords);
  const mapOfReplaceWords = (replaceWords ?? []).reduce(
    (a, c: WordContract) => {
      a.set(c.text, c);
      return a;
    },
    new Map()
  );

  const setOfAllWords = new Set([
    ...setOfBoldWords,
    ...setOfItalicWords,
    ...mapOfReplaceWords.keys(),
  ]);

  return [...setOfAllWords].reduce((a, text) => {
    a.set(
      text,
      createReplacementWord({
        text,
        bold: setOfBoldWords.has(text),
        italic: setOfItalicWords.has(text),
        replaceWith: mapOfReplaceWords.get(text)?.replaceWith,
      })
    );
    return a;
  }, new Map());
}

function _createSet(listOfWords: any[]) {
  return listOfWords ? new Set(listOfWords) : new Set();
}
