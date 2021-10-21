import fs from "fs";
import inquirer from "inquirer";
import { promptQuestions } from "./config/prompt";
import { fetchChuckNorrisWords } from "./lib/http.request";
import { parseInputFileByLine } from "./parse/parse.file.by.line";
import { ProgramOutput, RawParameters } from "./types";

async function main(): Promise<ProgramOutput> {
  const [rawParameters, chuckNorrisRandomWords] = await Promise.all<
    RawParameters,
    string
  >([inquirer.prompt(promptQuestions), fetchChuckNorrisWords()]);
  const markupText = await parseInputFileByLine(
    rawParameters,
    chuckNorrisRandomWords
  );
  return {
    markupText,
    output: rawParameters.output,
    fileName: rawParameters.fileName,
  };
}

main().then(({ markupText, output, fileName }) => {
  output !== "file" && console.log("\n", markupText, "\n");
  output !== "screen" && generateOutputFile({ markupText, output, fileName });
});

function generateOutputFile({ markupText, fileName }: ProgramOutput) {
  const fileNameMD = `${fileName}.md`;
  fs.writeFile(fileNameMD, markupText as string, (err) => {
    if (err) return console.error(err);
    console.log("Generated markup file: ", fileNameMD);
  });
}
