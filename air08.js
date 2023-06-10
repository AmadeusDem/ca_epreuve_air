// Mélanger deux tableaux triés
/*
Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}

Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  let argsToReturn = [];
  if (arguments.length < 3) {
    printError("Error. Not enough arguments");
    process.exit(0);
  }
  const fusionArg = arguments.indexOf("fusion");
  if (fusionArg === -1) {
    printError(
      "Error. You need to use the argument fusion. Usage example: node air08.js 1 2 fusion 2 3"
    );
    process.exit(0);
  }
  const firstArray = arguments.slice(2, fusionArg);
  const secondArray = arguments.slice(fusionArg + 1);
  firstArray.some((element) => {
    if (isNaN(element)) {
      printError("Error. Please use only integers in your first array");
      process.exit(0);
    }
  });
  secondArray.some((element) => {
    if (isNaN(element)) {
      printError("Error. Please use only integers in your second array");
      process.exit(0);
    }
  });
  argsToReturn.push(firstArray.map((element) => parseInt(element)));
  argsToReturn.push(secondArray.map((element) => parseInt(element)));
  return argsToReturn;
};
const sortedFusion = (sortedArray1, sortedArray2) => {
  let newSortedArray = [];
  while (sortedArray1.length !== 0 && sortedArray2.length !== 0) {
    if (sortedArray1[0] <= sortedArray2[0]) {
      newSortedArray.push(sortedArray1.shift());
    } else {
      newSortedArray.push(sortedArray2.shift());
    }
  }
  newSortedArray.push(
    ...(sortedArray1.length === 0 ? sortedArray2 : sortedArray1)
  );

  return newSortedArray;
};
// Parsing and handling errors
const [firstArray, secondArray] = handlingErrorsInArguments(args);
// Solving problem
const result = sortedFusion(firstArray, secondArray);
// Printing result
console.log(result);
