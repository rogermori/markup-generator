const readline = require("readline");
const fs = require("fs");

function readFile() {
  return new Promise((resolve, reject) => {
    var rl = readline.createInterface({
      input: fs.createReadStream("./input.txt"),
      output: process.stdout,
      terminal: false,
    });
    rl.on("line", function (line) {
      console.log(line); //or parse line
    });
    rl.on("close", function () {
      resolve("loco malo poto");
    });
  });
}

readFile().then((res) => console.log(res));

/*
const read = require("stdio").read;

async function onLine(line) {
  console.log(line, "\n\n");
}

read(onLine).then(() => console.log("finished"));
*/
/*
var last = "";

process.stdin.on("data", function (chunk) {
  var lines, i;

  lines = (last + chunk).split("\n");
  for (i = 0; i < lines.length - 1; i++) {
    console.log("line: " + lines[i]);
  }
  last = lines[i];
});

process.stdin.on("end", function () {
  console.log("line: " + last);
});

process.stdin.resume();

console.log("malo");

*/
