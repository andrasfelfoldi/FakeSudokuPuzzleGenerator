"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePuzzles_1 = require("./BasePuzzles");
// utils = require("./Utils");
var TableTransformer_1 = require("./TableTransformer");
var Random_1 = require("./Random");
var _transformBaseSudokuPuzzle = function (puzzle) {
    puzzle = TableTransformer_1.shuffleColumns(puzzle);
    puzzle = TableTransformer_1.shuffleRows(puzzle);
    puzzle = TableTransformer_1.rotateTable(puzzle, Random_1.getRandomIntBetween(0, 4));
    if (Random_1.getRandomIntBetween(0, 2)) {
        puzzle = TableTransformer_1.transponseTable(puzzle);
    }
    if (Random_1.getRandomIntBetween(0, 2)) {
        puzzle = TableTransformer_1.horizontallyMirrorTable(puzzle);
    }
    if (Random_1.getRandomIntBetween(0, 2)) {
        puzzle = TableTransformer_1.verticallyMirrorTable(puzzle);
    }
    puzzle = TableTransformer_1.randomizeTableNumbers(puzzle);
    return puzzle;
};
/**
 * @Method: Returns a very easy puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
exports.getVeryEasySudoku = function () {
    var puzzle = BasePuzzles_1.getRandomVeryEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
};
/**
 * @Method: Returns an easy puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
exports.getEasySudoku = function () {
    var puzzle = BasePuzzles_1.getRandomEasy();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
};
/**
 * @Method: Returns a medium puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
exports.getMediumSudoku = function () {
    var puzzle = BasePuzzles_1.getRandomMedium();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
};
/**
 * @Method: Returns a hard puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
exports.getHardSudoku = function () {
    var puzzle = BasePuzzles_1.getRandomHard();
    puzzle = _transformBaseSudokuPuzzle(puzzle);
    return puzzle;
};
/**
 * @Method: Returns a puzzle with the required difficulty.
 * @Param String of either one of the following values:
 *        "VeryEasy" || "Easy" || "Medium" || "Hard".
 * Case does not matter. If the value is omitted or does not match any, a VeryEasy puzzle will be returned.
 * @Return {(number | null)[][];}
 */
exports.getSudoku = function (difficulty) {
    switch (difficulty + "".toLowerCase()) {
        case "veryeasy":
            return exports.getVeryEasySudoku();
        case "easy":
            return exports.getEasySudoku();
        case "medium":
            return exports.getMediumSudoku();
        case "hard":
            return exports.getHardSudoku();
        default:
            return exports.getVeryEasySudoku();
    }
};
