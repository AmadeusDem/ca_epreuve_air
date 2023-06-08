// Chercher l'intrus
/*
Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.

Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur

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
const findMissingPeers = (inputsArray) => {
  let noPeer = [];
  const peers = new Map();
  for (element of inputsArray) {
    // For each element in the array we add it in a map to count them.
    peers.set(element, peers.get(element) + 1 || 1);
  }
  for (const [key, value] of peers) {
    if (value % 2 !== 0) {
      noPeer.push(key);
    }
  }
  return noPeer;
};
// Handling errors
handlingErrorsInArguments(args);
// Parsing
const inputs = args.slice(2);
// Solving problem
const result = findMissingPeers(inputs);
// Printing result
console.log(result);
