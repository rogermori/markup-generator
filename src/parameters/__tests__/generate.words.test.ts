import { ListOfWords, WordContract } from "../../types";
import {
  createReplacementWord,
  createMapOfReplaceWords,
} from "../generate.word.parms";
describe("Paremeters", () => {
  describe("createReplacementWord", () => {
    it("should return **Choco**", () => {
      const word: WordContract = {
        text: "Choco",
        bold: true,
      };
      expect(createReplacementWord(word)).toBe("**Choco**");
    });

    it("should return _Choco_", () => {
      const word: WordContract = {
        text: "Choco",
        italic: true,
      };
      expect(createReplacementWord(word)).toBe("_Choco_");
    });

    it("should return ***Choco***", () => {
      const word: WordContract = {
        text: "Choco",
        bold: true,
        italic: true,
      };
      expect(createReplacementWord(word)).toBe("***Choco***");
    });

    it("should return CHOCO", () => {
      const word: WordContract = {
        text: "Choco",
        replaceWith: "CHOCO",
      };
      expect(createReplacementWord(word)).toBe("CHOCO");
    });

    it("should return **CHOCO**", () => {
      const word: WordContract = {
        text: "Choco",
        replaceWith: "CHOCO",
        bold: true,
      };
      expect(createReplacementWord(word)).toBe("**CHOCO**");
    });

    it("should return _CHOCO_", () => {
      const word: WordContract = {
        text: "Choco",
        replaceWith: "CHOCO",
        italic: true,
      };
      expect(createReplacementWord(word)).toBe("_CHOCO_");
    });

    it("should return ***CHOCO***", () => {
      const word: WordContract = {
        text: "Choco",
        replaceWith: "CHOCO",
        italic: true,
        bold: true,
      };
      expect(createReplacementWord(word)).toBe("***CHOCO***");
    });
  });

  describe("createMapOfWords", () => {
    it("should return a Map of Words", () => {
      const listOfWords: ListOfWords = {
        boldWords: ["Choco", "Chuck", "Norris"],
        italicWords: ["food"],
        replaceWords: [
          { text: "Choco", replaceWith: "CHOCO" },
          { text: "sustainable", replaceWith: "SUSTAINABLE" },
        ],
      };
      const result = createMapOfReplaceWords(listOfWords);

      const expectedKeys = ["Choco", "Chuck", "Norris", "food", "sustainable"];
      const keys = [...result.keys()];
      const values = [...result.values()];
      const expectedValues = [
        "**CHOCO**",
        "**Chuck**",
        "**Norris**",
        "_food_",
        "SUSTAINABLE",
      ];
      expect(keys).toEqual(expect.arrayContaining(expectedKeys));
      expect(expectedKeys).toEqual(expect.arrayContaining(keys));
      expect(values).toEqual(expect.arrayContaining(expectedValues));
      expect(expectedValues).toEqual(expect.arrayContaining(values));
    });
  });
});
