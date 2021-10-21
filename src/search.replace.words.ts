import { parseWords } from "./lib/parameter.utils";

const generateRegExp = (mapOfWords: Map<string, string>) =>
  [...mapOfWords.keys()].map((word) => `\\b${word}\\b`).join("|");

export function replaceWords(text: string, mapOfWords: Map<string, string>) {
  const regExp = new RegExp(generateRegExp(mapOfWords), "g");
  return text.replace(regExp, (match) => mapOfWords.get(match));
}

export function matchParagraph(words: string[], paragraph: string): boolean {
  const setOfWords = new Set(parseWords(paragraph));
  return paragraph && words.every((word) => setOfWords.has(word));
}
