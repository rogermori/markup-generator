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
});
