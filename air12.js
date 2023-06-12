// Le roi des tris
/*
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6

Afficher error et quitter le programme en cas de problèmes d’arguments.

Wikipedia vous présentera une belle description de cet algorithme de tri.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const handlingErrorsInArguments = (arguments) => {
  const arrayToSort = arguments.slice(2);
  if (arguments.length < 3) {
    printError("Error. Not enough arguments.");
    process.exit(0);
  }
  arrayToSort.some((element) => {
    if (isNaN(element)) {
      printError("Error. One of your argument is not a number.");
      process.exit(0);
    }
  });
};
const quickSort = (arrayToSort) => {
  if (arrayToSort.length <= 1) {
    return arrayToSort;
  }

  const pivot = arrayToSort[0];
  const tableauGauche = [];
  const tableauDroite = [];

  for (let i = 1; i < arrayToSort.length; i++) {
    arrayToSort[i] > pivot
      ? tableauDroite.push(arrayToSort[i])
      : tableauGauche.push(arrayToSort[i]);
  }
  return [...quickSort(tableauGauche), pivot, ...quickSort(tableauDroite)];
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const arrayToSort = args.slice(2).map((element) => parseInt(element));
// Solving problem
const result = quickSort(arrayToSort);
// Printing result
for (element of result) {
  console.log(element);
}
