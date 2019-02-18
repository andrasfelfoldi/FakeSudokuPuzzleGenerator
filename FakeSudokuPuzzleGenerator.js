import { getRandomVeryEasy, getRandomEasy, getRandomMedium, getRandomHard } from "./BasePuzzles";
// utils = require("./Utils");
import { shuffleColumns, shuffleRows, rotateTable, transponseTable, horizontallyMirrorTable, verticallyMirrorTable, randomizeTableNumbers } from "./TableTransformer";
import { getRandomIntBetween } from "./Random";

_transformBaseSudokuPuzzle = function(puzzle){
    puzzle = shuffleColumns(puzzle);
    puzzle = shuffleRows(puzzle);
    puzzle = rotateTable(puzzle, getRandomIntBetween(0, 4));
    if(getRandomIntBetween(0, 2)){
        puzzle = transponseTable(puzzle);
    }
    if(getRandomIntBetween(0, 2)){
        puzzle = horizontallyMirrorTable(puzzle);
    }
    if(getRandomIntBetween(0, 2)){
        puzzle = verticallyMirrorTable(puzzle);
    }
    puzzle = randomizeTableNumbers(puzzle);

    return puzzle;
}

export const getVeryEasySudoku = function(){
    let puzzle = getRandomVeryEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

export const getEasySudoku = function(){
    let puzzle = getRandomEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

export const getMediumSudoku = function(){
    let puzzle = getRandomMedium();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}

export const getHardSudoku = function(){
    let puzzle = getRandomHard();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
}