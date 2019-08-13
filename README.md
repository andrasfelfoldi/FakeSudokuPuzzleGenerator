# FakeSudokuPuzzleGenerator

FakeSudokuPuzzleGenerator generates unique solution sudoku puzzles by randomly altering already existing unique solution sudoku puzzles serving as base puzzles. All of the alterations guarantee that the newly generated sudoku puzzles remain unique solution puzzles with similar difficulty as the base puzzles.

Its called **Fake**SudokuPuzzleGenerator because it does not use backtracking or any similar algorithm to generate the puzzles, it just alters some already existing ones. Since the number of possible alterations that can be performed on a single sudoku puzzle is very high, the fact that the new puzzles are generated using some base puzzles should not be noticeable, every generated puzzle should feel new.

---

**The available difficulties are:**

- VeryEasy
- Easy
- Medium
- Hard

## How to use

### Importing

#### ES6

```javascript
import {
  getSudoku,
  getVeryEasySudoku,
  getEasySudoku,
  getMediumSudoku,
  getHardSudoku
} from "fake-sudoku-puzzle-generator";
```

#### Generating puzzles

```javascript
// returns a puzzle of the specified difficulty
puzzle = getSudoku("VeryEasy");

// returns a very easy puzzle
veryEasyPuzzle = getVeryEasySudoku();

// returns an easy puzzle
easyPuzzle = getEasySudoku();

// returns a medium puzzle
mediumPuzzle = getMediumSudoku();

// returns a hard puzzle
hardPuzzle = getHardSudoku();
```

The generated puzzle is a 2D `array` containing 9 `arrays`, each of which represents a row of the generated puzzle. These rows will contain the initial `numbers` and `null` values on blank spaces.

Here is an example how it may look like:

```javascript
puzzle = [
  [null, null, null, null, null, null, 2, null, null],
  [9, 7, 6, null, null, null, null, 5, null],
  [null, null, null, null, 8, 3, null, null, null],
  [8, null, 1, null, null, null, null, null, null],
  [5, null, 7, null, null, null, 6, 4, 1],
  [null, null, null, 2, null, null, null, null, null],
  [null, null, null, 8, null, null, null, null, 4],
  [null, 4, null, null, 9, 5, 3, null, 2],
  [7, null, 5, null, null, null, null, null, null]
];
```

## Alterations

The random alterations used are the following:

- Shuffling 3 wide columns (6 possible outcomes)
- Shuffling single columns inside the 3 wide columns (6x6x6 = 216 possible outcomes)
- Shuffling 3 wide rows (6 possible outcomes)
- Shuffling single rows inside the 3 wide rows (6x6x6 = 216 possible outcomes)
- Either transposing the table or not (2 possible outcomes)
- Rotating the table 0 to 3 times (4 possible outcomes)
- Either mirroring the table horizontally or not (2 possible outcomes)
- Either mirroring the table vertically or not (2 possible outcomes)
- Changing up the original numbers (362880 possible outcomes)

---

Currently, this generator uses 10 different base puzzles for each difficulty settings. Every time a new puzzle is generated, one is chosen randomly. (10 possible outcomes)

Looking at the amount of different outcomes these alterations can provide, it's safe to say that this "fake" way of generating the puzzles shouldn't be noticeable.

**It is possible to generate the same puzzle with different alterations (eg. shuffling the rows in a way that would result in the same puzzle as simply mirroring the base puzzle horizontally), but this fact shouldn't make a big impact to the overall cardinality of the outcomes.**

# License

MIT License

Copyright (c) 2019 Felföldi András

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
