/**
 * @Method: Returns a very easy puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export declare const getVeryEasySudoku: () => (number | null)[][];
/**
 * @Method: Returns an easy puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export declare const getEasySudoku: () => (number | null)[][];
/**
 * @Method: Returns a medium puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export declare const getMediumSudoku: () => (number | null)[][];
/**
 * @Method: Returns a hard puzzle.
 * @Param none
 * @Return {(number | null)[][];}
 */
export declare const getHardSudoku: () => (number | null)[][];
export declare type Difficulty = "VeryEasy" | "Easy" | "Medium" | "Hard";
/**
 * @Method: Returns a puzzle with the required difficulty.
 * @Param String of either one of the following values:
 *        "VeryEasy" || "Easy" || "Medium" || "Hard".
 * Case does not matter. If the value is omitted or does not match any, a VeryEasy puzzle will be returned.
 * @Return {(number | null)[][];}
 */
export declare const getSudoku: (difficulty: Difficulty) => (number | null)[][];
