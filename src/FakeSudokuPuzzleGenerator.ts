import {
  getRandomVeryEasy,
  getRandomEasy,
  getRandomMedium,
  getRandomHard
} from "./BasePuzzles";
// utils = require("./Utils");
import {
  shuffleColumns,
  shuffleRows,
  rotateTable,
  transponseTable,
  horizontallyMirrorTable,
  verticallyMirrorTable,
  randomizeTableNumbers
} from "./TableTransformer";
import { getRandomIntBetween } from "./Random";
import { SudokuNumber } from "./SudokuNumber";

const _transformBaseSudokuPuzzle = function(
  puzzle: SudokuNumber[][]
): SudokuNumber[][] {
  puzzle = shuffleColumns(puzzle);
  puzzle = shuffleRows(puzzle);
  puzzle = rotateTable(puzzle, getRandomIntBetween(0, 4));
  if (getRandomIntBetween(0, 2)) {
    puzzle = transponseTable(puzzle);
  }
  if (getRandomIntBetween(0, 2)) {
    puzzle = horizontallyMirrorTable(puzzle);
  }
  if (getRandomIntBetween(0, 2)) {
    puzzle = verticallyMirrorTable(puzzle);
  }
  puzzle = randomizeTableNumbers(puzzle);

  return puzzle;
};

/**
 * @Method: Returns a very easy puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export const getVeryEasySudoku = function(): SudokuNumber[][] {
  let puzzle: SudokuNumber[][] = getRandomVeryEasy();
  puzzle = _transformBaseSudokuPuzzle(puzzle);
  return puzzle;
};

/**
 * @Method: Returns an easy puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export const getEasySudoku = function(): SudokuNumber[][] {
  let puzzle: SudokuNumber[][] = getRandomEasy();
  puzzle = _transformBaseSudokuPuzzle(puzzle);
  return puzzle;
};

/**
 * @Method: Returns a medium puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export const getMediumSudoku = function(): SudokuNumber[][] {
  let puzzle: SudokuNumber[][] = getRandomMedium();
  puzzle = _transformBaseSudokuPuzzle(puzzle);
  return puzzle;
};

/**
 * @Method: Returns a hard puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export const getHardSudoku = function(): SudokuNumber[][] {
  let puzzle: SudokuNumber[][] = getRandomHard();
  puzzle = _transformBaseSudokuPuzzle(puzzle);
  return puzzle;
};

export type Difficulty = "VeryEasy" | "Easy" | "Medium" | "Hard";
/**
 * @Method: Returns a puzzle with the required difficulty.
 * @Param String of either one of the following values:
 *        "VeryEasy" || "Easy" || "Medium" || "Hard".
 * Case does not matter. If the value is omitted or does not match any, a VeryEasy puzzle will be returned.
 * @Return {(number | null)[][];}
 */
export const getSudoku = function(difficulty: Difficulty): SudokuNumber[][] {
  switch (difficulty + "".toLowerCase()) {
    case "veryeasy":
      return getVeryEasySudoku();
    case "easy":
      return getEasySudoku();
    case "medium":
      return getMediumSudoku();
    case "hard":
      return getHardSudoku();
    default:
      return getVeryEasySudoku();
  }
};
