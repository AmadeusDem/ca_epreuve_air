// Contrôle de pass sanitaire
/*
Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}

Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit

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
const containsSubstring = (string, substring) => {
  string = string.toLowerCase();
  substring = substring.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring.charAt(0)) {
      return string.slice(i, i + substring.length) === substring;
    }
  }
  return false;
};

const doesNotContainThisString = (inputsArray, string) => {
  let doesNotContain = [];
  for (input of inputsArray) {
    !containsSubstring(input, string) && doesNotContain.push(input);
  }
  return doesNotContain;
};
// Handling errors
handlingErrorsInArguments(args);

// Parsing
const inputs = args.slice(2, -1);
const string = args.slice(-1)[0];

// Solving problem
const result = doesNotContainThisString(inputs, string);
// Printing result
for (element of result) {
  console.log(element);
}
