basePuzzles = require("./BasePuzzles");
utils = require("./Utils");
transformer = require('./TableTransformer');
randomGenerator = require('./Random');

puzzle = basePuzzles.getRandomMedium();

utils.printTable(puzzle);

puzzle = transformer.shuffleColumns(puzzle);
puzzle = transformer.shuffleRows(puzzle);
puzzle = transformer.rotateTable(puzzle, randomGenerator.getRandomIntBetween(0, 4));
if(randomGenerator.getRandomIntBetween(0, 2)){
    puzzle = transformer.transponseTable(puzzle);
}
if(randomGenerator.getRandomIntBetween(0, 2)){
    puzzle = transformer.mirrorTable(puzzle);
}
puzzle = transformer.randomizeTableNumbers(puzzle);

console.log('\n==================================================');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('==================================================\n');

console.log(utils.tableToString(puzzle));

// console.log(utils.tableToString(puzzle));