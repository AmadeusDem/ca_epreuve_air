// Afficher le contenu
/*
Créez un programme qui affiche le contenu d’un fichier donné en argument.

Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia

Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.
*/
const fs = require("fs");
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const inputs = arguments.slice(2);
  if (arguments.length !== 3) {
    printError("Error. Not enough arguments.");
    process.exit(0);
  }
  if (!isNaN(inputs)) {
    printError("Error.");
    process.exit(0);
  }
};
const readFile = (fileName) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      printError("Error while trying to access the file.");
      process.exit(0);
    } else {
      console.log(data);
    }
  });
};

// Handling errors
handlingErrorsInArguments(args);
// Parsing
const userInput = args[2];
// Solving problem
readFile(userInput);
