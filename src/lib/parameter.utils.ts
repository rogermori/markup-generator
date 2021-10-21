import { regularExpressions } from "../config";

export const parseWords = (paragraph: string) =>
  (paragraph ?? "").match(regularExpressions.word);

export const parseReplaceWords = (paragraph: string) =>
  (paragraph ?? "")
    .match(regularExpressions.word)
    .reduce((p, c, index, array) => {
      if (index % 2 === 0) {
        p.push({
          text: c,
          replaceWith: array[index + 1],
        });
      }
      return p;
    }, []);
