basePuzzles = require("./BasePuzzles");
utils = require("./Utils");
transformer = require('./TableTransformer');
randomGenerator = require('./Random');

_transformBaseSudokuPuzzle = (puzzle) => {
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

    return puzzle;
}

module.exports.getEasySudoku = () => {
    let puzzle = basePuzzles.getRandomEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

module.exports.getMediumSudoku = () => {
    let puzzle = basePuzzles.getRandomMedium();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

module.exports.getHardSudoku = () => {
    let puzzle = basePuzzles.getRandomHard();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}