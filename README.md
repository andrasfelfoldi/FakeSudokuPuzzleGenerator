# FakeSudokuPuzzleGenerator
FakeSudokuPuzzleGenerator generates unique solution sudoku puzzles by randomly altering already existing unique solution sudoku puzzles serving as base puzzles. All of the alterations guarantee that the newly generated sudoku puzzles remain unique solution puzzles with similar difficulty as the base puzzles.

Its called **Fake**SudokuPuzzleGenerator because it does not use backtracking or any similar algorithm to generate the puzzles, it just alters some already existing ones. Since the number of possible alterations that can be performed on a single sudoku puzzle is very high, the fact that the new puzzles are generated using some base puzzles should not be noticeable, so every generated puzzle should feel new.


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
