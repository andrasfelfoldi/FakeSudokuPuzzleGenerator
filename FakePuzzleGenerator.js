basePuzzles = require("./BasePuzzles");
utils = require("./Utils");
shuffler = require('./TableTransformer');

puzzle = basePuzzles.getRandomHard();

utils.printTable(puzzle);

puzzle = shuffler.rotateTable(puzzle);

console.log('\n==================================================');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('==================================================\n');

utils.printTable(puzzle);

// console.log(utils.tableToString(puzzle));