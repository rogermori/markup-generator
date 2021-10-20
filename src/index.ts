import inquirer from "inquirer";
import { ListOfWords } from "./types";
import { config } from "./config/index";
const { regularExpressions } = config;
type Answers = {
  _lineWidth: string;
  _textAlignment: string;
  _spacing: string;
  _boldStrings: string;
  _italicStrings: string;
  _replaceString: string;
  _chuckNorrisFFS: string;
  _fileName: string;
};

const validateWords = (value: string) => {
  if ((value ?? "").match(regularExpressions.word)) return true;
  return "Enter a list of words";
};

const validateReplaceWords = (value: string) => {
  if (((value ?? "").match(regularExpressions.word) ?? []).length % 2 === 0)
    return true;
  return "Enter a valid list of replace words";
};

inquirer
  .prompt([
    {
      name: "_lineWidth",
      message: "Line Width",
      type: "input",
      default: 80,
      validate(value) {
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
      name: "_boldStrings",
      message: "Bold Strings:",
      validate: validateWords,
      default: '"Choco", "Chuck", "Norris"',
    },
    {
      name: "_italicStrings",
      message: "Italic Strings:",
      validate: validateWords,
      default: '"food"',
    },
    {
      name: "_replaceString",
      message: "Replace Strings:",
      default: '("Choco", "CHOCO"), ("sustainable", "SUSTAINABLE")',
      validate: validateReplaceWords,
    },
    {
      name: "_chuckNorrisFFS",
      message: "Chuck Norris food fact strings:",
      validate: validateWords,
      default: '"industry", "change"',
    },
    {
      name: "_fileName",
      message: "Input Text File Name:",
      default: "./data/input.txt",
    },
  ])
  .then((answers: Answers) => {
    //const length = parseInt(_lineWidth);
    console.log(JSON.stringify(answers, null, 2));

    const listOfWords = {
      length: parseInt(answers._lineWidth),
      boldWords: answers._boldStrings.match(regularExpressions.word),
      italicWords: answers._italicStrings.match(regularExpressions.word),
      chuckNorrisFFS: answers._chuckNorrisFFS.match(regularExpressions.word),
      replaceWords: answers._replaceString
        .match(regularExpressions.word)
        .reduce((p, c, index, array) => {
          if (index % 2 === 0) {
            p.push({
              text: c,
              replaceWith: array[index + 1],
            });
          }
          return p;
        }, []),
    };
    console.log(JSON.stringify(listOfWords, null, 2));
  });
