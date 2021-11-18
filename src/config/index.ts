export const randomWordsAPI = {
  host: "run.mocky11.io",
  path: "/v3/f4e772ad-3f5c-4139-a150-1ac532b8ace8",
};

export const regularExpressions = {
  word: /\w\w+/gm,
  leftBoundary: "((?<=^)|(?<=[\\s:\\[\\]\\(\\)\\{\\}\\.\\,\\?\\+\\*\\^\\+]))",
  rightBoundary: "(?=[\\s$:%\\[\\]\\(\\)\\{\\}\\.\\,\\?\\+\\*\\^\\+\\$])",
};
