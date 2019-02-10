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
        puzzle = transformer.horizontallyMirrorTable(puzzle);
    }
    if(randomGenerator.getRandomIntBetween(0, 2)){
        puzzle = transformer.verticallyMirrorTable(puzzle);
    }
    puzzle = transformer.randomizeTableNumbers(puzzle);

    return puzzle;
}

exports.getVeryEasySudoku = () => {
    let puzzle = basePuzzles.getRandomVeryEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

exports.getEasySudoku = () => {
    let puzzle = basePuzzles.getRandomEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

exports.getMediumSudoku = () => {
    let puzzle = basePuzzles.getRandomMedium();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

exports.getHardSudoku = () => {
    let puzzle = basePuzzles.getRandomHard();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}