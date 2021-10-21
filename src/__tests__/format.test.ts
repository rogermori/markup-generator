import { alignText } from "../format.text";
import { Alignment, AlignParms, FormatTextParms, Spacing } from "../types";

describe("FormatText::", () => {
  describe("AlignText", () => {
    it("aligLeft 10 should return Choco", () => {
      const aligParms: AlignParms = {
        text: "Choco",
        length: 3,
        alignment: Alignment.left,
        char: "*",
      };
      expect(alignText(aligParms)).toBe("Choco");
    });

    it("aligLeft 20 should return Choco", () => {
      const aligParms: AlignParms = {
        text: "Choco",
        length: 9,
        alignment: Alignment.left,
        char: "*",
      };
      expect(alignText(aligParms)).toBe("Choco");
    });

    it("aligRight should return Choco", () => {
      const aligParms: AlignParms = {
        text: "Choco",
        length: 3,
        alignment: Alignment.right,
        char: "*",
      };
      expect(alignText(aligParms)).toBe("Choco");
    });

    it("aligCenter should return Choco", () => {
      const aligParms: AlignParms = {
        text: "Choco",
        length: 3,
        alignment: Alignment.center,
        char: "*",
      };
      expect(alignText(aligParms)).toBe("Choco");
    });

    it("aligRight should return ********Choco", () => {
      const aligParms: AlignParms = {
        text: "Choco",
        length: 13,
        alignment: Alignment.right,
        char: "*",
      };
      expect(alignText(aligParms)).toBe("********Choco");
    });

    it("aligCenter should return ****Choco*****", () => {
      const aligParms: AlignParms = {
        text: "Choco",
        length: 14,
        alignment: Alignment.center,
        char: "*",
      };

      expect(alignText(aligParms)).toBe("****Choco*****");
    });
  });

  describe("Formating", () => {
    it("should format the document", () => {
      const formatParms: FormatTextParms = {
        alignment: Alignment.right,
        length: 80,
        spacing: Spacing.single,
        text: `If you are looking to have an impact on the world, then read carefully because at **Choco**, we are moving mountains to transition the world into SUSTAINABLE _food_ systems.\nThe _food_ industry is an industry with essential problems, especially in food-supply-chain. We are now leveraging technology to bring change and start the necessary transformation the industry is craving for.\nWe are building the digital platform on which the global _food_ trade will operate. Our company has the potential to reduce food prices, decrease _food_ waste by 30% and reshape one of the oldest and largest industries on the planet.`,
      };
      const expectedDocument = ` If you are looking to have an impact on the world, then read carefully because\n at **Choco**, we are moving mountains to transition the world into SUSTAINABLE\n                                                                _food_ systems.\n      The _food_ industry is an industry with essential problems, especially in\n  food-supply-chain. We are now leveraging technology to bring change and start\n                      the necessary transformation the industry is craving for.\n We are building the digital platform on which the global _food_ trade will\noperate. Our company has the potential to reduce _food_ prices, decrease _food_\nwaste by 30% and reshape one of the oldest and largest industries on the planet.`;
      //const formatedDocument = formatDocument(formatParms);
      //expect(formatedDocument).toBe(expectedDocument);
    });
  });
});
