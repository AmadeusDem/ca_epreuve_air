// Un seul à la fois
/*
Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.

Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const input = arguments[2];
  if (arguments.length !== 3) {
    printError("Error. Not enough or too much arguments.");
    process.exit(0);
  }
  if (!isNaN(input)) {
    printError("Error. Please enter a string.");
  }
};
const removeDuplicateCharacters = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      result += string[i];
    }
  }
  return result;
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const input = args[2];
// Solving problem
const result = removeDuplicateCharacters(input);
// Printing results
console.log(result);
