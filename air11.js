// Afficher une pyramide
/*
Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.

Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const floors = arguments[3];
  if (arguments.length !== 4) {
    printError("Error. Not enough or too much arguments.");
    process.exit(0);
  }
  if (isNaN(floors)) {
    printError(
      "Error. You need to precise the number of floors for the pyramid."
    );
    process.exit(0);
  }
};
const displayPyramid = (characterToPrint, numberOfFloors) => {
  for (let i = 0; i < numberOfFloors; i++) {
    let lineToPrint = "";
    let numberChar = 2 * i + 1;
    for (let j = 0; j < numberOfFloors - 1 - i; j++) {
      lineToPrint = lineToPrint.concat(" ");
    }
    for (let j = 0; j < numberChar; j++) {
      lineToPrint = lineToPrint.concat(characterToPrint);
    }
    console.log(lineToPrint);
  }
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const characterToPrint = args[2];
const numberOfFloors = parseInt(args[3]);
// Solving problem
displayPyramid(characterToPrint, numberOfFloors);
