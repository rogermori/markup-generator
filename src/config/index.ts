export const randomWordsAPI = {
  host: "api.chucknorris.io",
  path: "/jokes/random",
};

export const regularExpressions = {
  word: /\w\w+/gm,
  leftBoundary: "((?<=^)|(?<=[\\s:\\[\\]\\(\\)\\{\\}\\.\\,\\?\\+\\*\\^\\+]))",
  rightBoundary: "(?=[\\s$:%\\[\\]\\(\\)\\{\\}\\.\\,\\?\\+\\*\\^\\+\\$])",
};
