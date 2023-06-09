// Insertion dans un tableau trié
/*
Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}

Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4

$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const inputs = arguments.slice(2);
  if (arguments.length < 4) {
    printError("Error. Not enough arguments. Usage: node air07.js 1 3");
    process.exit(0);
  }
  if (
    inputs.some((input) => {
      if (isNaN(input)) {
        printError("Error. Please enter only numbers in arguments.");
        process.exit(0);
      }
    })
  );
};
const insertInSortedArray = (sortedArray, elementToInsert) => {
  let copyArray = [...sortedArray];
  const indexToInsert = copyArray.findIndex(
    (element) => element >= elementToInsert
  );

  copyArray.splice(
    indexToInsert !== -1 ? indexToInsert : copyArray.length,
    0,
    elementToInsert
  );
  return copyArray;

  // for (let i = 0; i < copyArray.length; i++) {
  //   if (i === copyArray.length - 1 && copyArray[i] <= elementToInsert) {
  //     copyArray.push(elementToInsert);
  //     return copyArray;
  //   } else if (i === 0 && elementToInsert < copyArray[i]) {
  //     copyArray.unshift(elementToInsert);
  //     return copyArray;
  //   } else if (
  //     copyArray[i] <= elementToInsert &&
  //     elementToInsert < copyArray[i + 1]
  //   ) {
  //     let firstArray = copyArray.slice(0, i + 1);
  //     let secondArray = copyArray.slice(i + 1);
  //     console.log(`${firstArray},${secondArray}`);
  //     firstArray.push(elementToInsert);
  //     return firstArray.concat(secondArray);
  //   }
  // }
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing

// Solving problem
const result = insertInSortedArray([1, 3, 4], 10);
// Printing result
console.log(result);
