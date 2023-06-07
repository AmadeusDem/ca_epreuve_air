// Split en fonction
/*
Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}

Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const stringToSplit = arguments[2];
  if (arguments.length !== 4) {
    printError(
      'Error. Not enough or too much arguments. Please enter strings in arguments. Usage : node air01.js "String to split" "Splitter" '
    );
    process.exit(0);
  }
  if (!isNaN(stringToSplit)) {
    printError("Error. The string you entered contains only numbers");
    process.exit(0);
  }
};
const splitText = (stringToSplit, splitter) => {
  const splittedWords = [];
  let lastSliceIndex = 0;

  for (let i = 0; i < stringToSplit.length; i++) {
    if (stringToSplit.startsWith(splitter, i)) {
      splittedWords.push(stringToSplit.slice(lastSliceIndex, i));
      lastSliceIndex = i + splitter.length;
      i += splitter.length - 1;
    }
  }

  splittedWords.push(stringToSplit.slice(lastSliceIndex));
  return splittedWords;
};
const printArray = (array) => {
  for (element of array) {
    console.log(element);
  }
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const stringToSplit = args[2];
const splitter = args[3];
// Solving problem
const result = splitText(stringToSplit, splitter);

// Printing results
printArray(result);
