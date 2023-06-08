// Sur chacun d'entre eux
/*
Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.

Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15

L’opération à appliquer sera toujours le dernier élément.

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};

const handlingErrorsInArguments = (arguments) => {
  const numbers = arguments.slice(2, -1);
  const operation = arguments.slice(-1)[0];
  if (arguments.length < 4) {
    printError(
      'Error. Not enough arguments. Usage example: node air05.js 1 "+2".'
    );
    process.exit(0);
  }
  if (numbers.some((number) => isNaN(number))) {
    printError("Error. All your arguments are not numbers");
    process.exit(0);
  }

  const operator = operation.slice(0, 1);
  const numberToAddOrSubstract = operation.slice(1);

  if ((operator !== "+" && operator !== "-") || isNaN(numberToAddOrSubstract)) {
    printError(
      'Error. The last argument is not correct. Usage example: node air05.js 1 "+2" or node air05.js 1 "-2"'
    );
    process.exit(0);
  }
};

const addOrSubstractOnEachElement = (
  numbersArray,
  operator,
  numberToAddOrSubstract
) => {
  const numbers = numbersArray.map((number) => {
    if (operator === "+") {
      return parseInt(number) + numberToAddOrSubstract;
    } else if (operator === "-") {
      return parseInt(number) - numberToAddOrSubstract;
    } else {
      return number;
    }
  });
  return numbers;
};

// Handling errors
handlingErrorsInArguments(args);

// Parsing
const numbers = args.slice(2, -1);
const operation = args.slice(-1)[0];
const operator = operation.charAt(0);
const numberToAddOrSubstract = operation.slice(1);

// Solving problem
const result = addOrSubstractOnEachElement(
  numbers,
  operator,
  numberToAddOrSubstract
);

// Printing result
console.log(result);
