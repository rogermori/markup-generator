import { replaceWords } from "../search.replace.words";
describe("replace words", () => {
  it("should replace words", () => {
    const mapOfWords = new Map([
      ["Choco", "**CHOCO**"],
      ["Chuck", "**Chuck**"],
      ["Norris", "**Norris**"],
      ["food", "_food_"],
      ["sustainable", "SUSTAINABLE"],
    ]);
    const text = `If you are looking to have an impact on the world, then read carefully because at Choco, we are moving mountains to transition the world into sustainable food systems.\nThe food industry is an industry with essential problems, especially in food-supply-chain. We are now leveraging technology to bring change and start the necessary transformation the industry is craving for.\nWe are building the digital platform on which the global food trade will operate. Our company has the potential to reduce food prices, decrease food waste by 30% and reshape one of the oldest and largest industries on the planet.`;
    const expected = `If you are looking to have an impact on the world, then read carefully because at **CHOCO**, we are moving mountains to transition the world into SUSTAINABLE _food_ systems.\nThe _food_ industry is an industry with essential problems, especially in food-supply-chain. We are now leveraging technology to bring change and start the necessary transformation the industry is craving for.\nWe are building the digital platform on which the global _food_ trade will operate. Our company has the potential to reduce _food_ prices, decrease _food_ waste by 30% and reshape one of the oldest and largest industries on the planet.`;
    const result = replaceWords(text, mapOfWords);
    expect(result).toBe(expected);
  });
});
