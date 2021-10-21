import inquirer from "inquirer";
import { promptQuestions } from "./config/prompt";
import { parseReplaceWords, parseWords } from "./lib/parameter.utils";
import { fetchChuckNorrisWords } from "./lib/http.request";
import { parseInputFileByLine } from "./parse/parse.file.by.line";
import { RawParameters } from "./types";

async function main() {
  const [rawParameters, chuckNorrisWords] = await Promise.all<
    RawParameters,
    string
  >([inquirer.prompt(promptQuestions), fetchChuckNorrisWords()]);

  //const listOfReplaceWords = mapToListOfWords(rawParameters);
  console.log(JSON.stringify(rawParameters, null, 2));
  console.log("Chuck norris words\n", chuckNorrisWords);
  const paragraphs = await parseInputFileByLine(rawParameters);

  console.log("file read is\n", paragraphs);
}

main().then((res) => console.log("zzzz", res));
