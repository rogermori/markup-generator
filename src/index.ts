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
    alignment: rawParameters._textAlignment,
  };
}

main().then(({ markupText, output, fileName, alignment }) => {
  output !== "file" && console.log("\n", markupText, "\n");
  output !== "screen" &&
    generateOutputFile({ markupText, output, fileName, alignment });
});

function generateOutputFile({
  markupText,
  fileName,
  alignment,
}: ProgramOutput) {
  const fileNameMD = `${fileName}.${alignment}.md`;
  fs.writeFile(fileNameMD, markupText as string, (err) => {
    if (err) return console.error(err);
    console.log("Generated markup file: ", fileNameMD);
  });
}
