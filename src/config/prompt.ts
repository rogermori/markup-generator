import inquirer from "inquirer";
import { regularExpressions } from "./index";

const validateWords = (value: string) => {
  if ((value ?? "").match(regularExpressions.word)) return true;
  return "Enter a list of words";
};

const validateReplaceWords = (value: string) => {
  if (((value ?? "").match(regularExpressions.word) ?? []).length % 2 === 0)
    return true;
  return "Enter a valid list of replace words";
};

export const promptQuestions = [
  {
    name: "_lineWidth",
    message: "Line Width",
    type: "input",
    default: 80,
    validate(value: string) {
      const valid = !isNaN(parseInt(value));
      return valid || "Please enter an integer number";
    },
  },
  {
    name: "_textAlignment",
    message: "Text Alignment :",
    type: "list",
    choices: ["left", "right", "center"],
  },
  {
    name: "_spacing",
    message: "Spacing",
    type: "list",
    choices: ["single", "double"],
    default: "single",
  },
  {
    name: "boldStrings",
    message: "Bold Strings:",
    validate: validateWords,
    default: '"Choco", "Chuck", "Norris"',
  },
  {
    name: "italicStrings",
    message: "Italic Strings:",
    validate: validateWords,
    default: '"food"',
  },
  {
    name: "replaceStrings",
    message: "Replace Strings:",
    default: '("Choco", "CHOCO"), ("sustainable", "SUSTAINABLE")',
    validate: validateReplaceWords,
  },
  {
    name: "chuckNorrisFFS",
    message: "Chuck Norris food fact strings:",
    validate: validateWords,
    default: '"industry", "change"',
  },
  {
    name: "fileName",
    message: "Input Text File Name:",
    default: "./data/input.txt",
  },
];
