// Rotation vers la gauche
/*
Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const inputs = arguments.slice(2);
  if (arguments.length < 3) {
    printError("Error. Not enough arguments.");
    process.exit(0);
  }
};
const rotateAnArrayToTheLeft = (arrayToRotate) => {
  /* 
  let copyArray = [...arrayToRotate];
  copyArray.push(copyArray.shift());
  return copyArray; 
  */

  let arrayToReturn = [];
  for (let i = 1; i < arrayToRotate.length; i++) {
    arrayToReturn.push(arrayToRotate[i]);
  }
  arrayToReturn.push(arrayToRotate[0]);
  return arrayToReturn;
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const userInputs = args.slice(2);
// Solving problem
const result = rotateAnArrayToTheLeft(userInputs);
// Printing result
console.log(result);
