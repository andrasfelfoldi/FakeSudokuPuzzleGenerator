basePuzzles = require("./BasePuzzles");
utils = require("./Utils");
shuffler = require('./Shuffle');

puzzle = basePuzzles.getRandomHard();

utils.printTable(puzzle);

puzzle = shuffler.shuffleColumns(puzzle);

console.log('\n==================================================');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('==================================================\n');

utils.printTable(puzzle);

// console.log(utils.tableToString(puzzle));