// Concat
/*
Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}

Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  if (arguments.length < 3) {
    printError("Error. Not enough arguments.");
    process.exit(0);
  }
};
const concatToString = (arrayOfStrings, separator) => {
  let stringToReturn = "";
  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    stringToReturn += `${arrayOfStrings[i]}${separator}`;
  }
  stringToReturn += arrayOfStrings[arrayOfStrings.length - 1];
  return stringToReturn;
};
const parseInputsFromArguments = (arguments) => {
  let arrayToReturn = [];
  // We don't get the last argument as it's the separator here
  for (let i = 2; i < arguments.length - 1; i++) {
    arrayToReturn.push(arguments[i]);
  }
  return arrayToReturn;
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const inputsArray = parseInputsFromArguments(args);
const separator = args[args.length - 1];
// Solving problem
const result = concatToString(inputsArray, separator);
// Printing result
console.log(result);
