basePuzzles = require("./BasePuzzles");
utils = require("./Utils");
shuffler = require('./Shuffle');

puzzle = basePuzzles.getRandomHard();

utils.printTable(puzzle);

shuffler.shuffleColumns(puzzle);

console.log('\n=================================\n');

utils.printTable(puzzle);

// console.log(utils.tableToString(puzzle));