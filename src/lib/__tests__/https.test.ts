import { fetchChuckNorrisWords } from "../http.request";
describe("HttpGet", () => {
  it("should return a set of random words", () => {
    expect(fetchChuckNorrisWords()).resolves.toBeDefined();
  });
});
