// Split
/*
Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}

Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const userInput = arguments[2];
  if (arguments.length !== 3) {
    printError(
      "Error. Not enough or too much arguments. Please enter only one string in arguments"
    );
    process.exit(0);
  }
  if (!isNaN(userInput)) {
    printError("Error. The string you entered contains only numbers");
    process.exit(0);
  }
};

const isSpaceTabOrNewLine = (char) => {
  return char === " " || char === "\n" || char === "\t";
};

const splitText = (stringToSplit) => {
  let splittedWords = [];
  let lastChar = "";
  let lastSliceIndex = 0;
  for (let i = 0; i < stringToSplit.length; i++) {
    if (
      isSpaceTabOrNewLine(stringToSplit[i]) &&
      !isSpaceTabOrNewLine(lastChar)
    ) {
      splittedWords.push(stringToSplit.slice(lastSliceIndex, i));
      lastSliceIndex = i;
    }
    lastChar = stringToSplit[i];
  }
  splittedWords.push(stringToSplit.slice(lastSliceIndex));
  return splittedWords.map((element) => element.replace(/ /g, ""));
};

const printArray = (array) => {
  for (element of array) {
    console.log(element);
  }
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const userInput = args[2];
// Solving problem
const result = splitText(userInput);

// Printing results
printArray(result);
