// Meta exercice
/*
Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.

Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)

Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
*/
const { execSync } = require("node:child_process");
const { existsSync } = require("node:fs");
var numberOfSuccess = 0;
var numberOfFailures = 0;
// Functions
const fileExists = (fileName) => {
  console.log("\x1b[46m", `Test for ${fileName}`, "\x1b[0m");
  if (existsSync(fileName)) {
    console.log("File exists: \x1b[32m Success \x1b[0m\n");
    numberOfSuccess++;
  } else {
    console.log("File doesn't exist: \x1b[31m Failure \x1b[0m\n");
    numberOfFailures++;
  }
};
const testNodeProgramJs = (fileName, args, expectedOutput) => {
  const execResult = execSync(`node ${fileName} ${args}`).toString();
  // console.log("\x1b[42m", execResult, "\x1b[0m");
  // console.log("\x1b[42m", expectedOutput, "\x1b[0m");
  if (execResult === expectedOutput) {
    console.log("Test: \x1b[32m Success \x1b[0m\n");
    numberOfSuccess++;
  } else {
    console.log("Test: \x1b[31m Failure \x1b[0m\n");
    numberOfFailures++;
  }
};

let fileName = "";
// Air00
fileName = "air00.js";
fileExists(fileName);
testNodeProgramJs(fileName, '"Bonjour les gars"', "Bonjour\nles\ngars\n");

// Air01
fileName = "air01.js";
fileExists(fileName);
testNodeProgramJs(
  fileName,
  '"Crevette magique dans la mer des étoiles" "la"',
  "Crevette magique dans \n mer des étoiles\n"
);

// Air02
fileName = "air02.js";
fileExists(fileName);
testNodeProgramJs(
  fileName,
  '"Je" "teste" "des" "trucs" " "',
  "Je teste des trucs\n"
);

// Air03
fileName = "air03.js";
fileExists(fileName);
testNodeProgramJs(fileName, '"1" "2" "3" "4" "5" "4" "3" "2" "1"', "5\n");

// Air04
fileName = "air04.js";
fileExists(fileName);
testNodeProgramJs(
  fileName,
  '"Hello milady,   bien ou quoi ??"',
  "Helo milady, bien ou quoi ?\n"
);

// Air05
fileName = "air05.js";
fileExists(fileName);
testNodeProgramJs(fileName, '"1" "2" "3" "4" "5" "+2"', "3\n4\n5\n6\n7\n");

// Air06
fileName = "air06.js";
fileExists(fileName);
testNodeProgramJs(
  fileName,
  '"Michel" "Albert" "Therese" "Benoit" "t"',
  "Michel\n"
);

// Air07
fileName = "air07.js";
fileExists(fileName);
testNodeProgramJs(fileName, '"1" "3" "4" "2"', "1\n2\n3\n4\n");

// Air08
fileName = "air08.js";
fileExists(fileName);
testNodeProgramJs(
  fileName,
  '"10" "20" "30" "fusion" "15" "25" "35"',
  "10\n15\n20\n25\n30\n35\n"
);

// Air09
fileName = "air09.js";
fileExists(fileName);
testNodeProgramJs(
  fileName,
  '"Michel" "Albert" "Therese" "Benoit"',
  "Albert\nTherese\nBenoit\nMichel\n"
);

// Air10
fileName = "air10.js";
fileExists(fileName);
testNodeProgramJs(fileName, "a.txt", "Je danse le mia\n");

// Air11
fileName = "air11.js";
fileExists(fileName);
testNodeProgramJs(fileName, '"0" "3"', "  0\n 000\n00000\n");

// Air12
fileName = "air12.js";
fileExists(fileName);
testNodeProgramJs(fileName, '"6" "5" "4" "3" "2" "1"', "1\n2\n3\n4\n5\n6\n");

console.log(
  `Total success: (${numberOfSuccess}/${numberOfFailures + numberOfSuccess})`
);
