const generateRegExp = (mapOfWords: Map<string, string>) =>
  [...mapOfWords.keys()].map((word) => `\\b${word}\\b`).join("|");

export function replaceWords(text: string, mapOfWords: Map<string, string>) {
  const regExp = new RegExp(generateRegExp(mapOfWords), "g");
  return text.replace(regExp, (match) => mapOfWords.get(match));
}
