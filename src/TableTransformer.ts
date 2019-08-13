import { getRandomIntBetween } from "./Random";
import { SudokuNumber } from "./SudokuNumber";

export const shuffleColumns = function(table: SudokuNumber[][]) {
  // shuffling the rows of a transponsed table
  // is the same is shuffling the columns of a normal table
  table = _transponseTable(table);

  table = _shuffleRows(table);

  // transponsing it back
  table = _transponseTable(table);

  return table;
};

const _shuffleRows = function(table: SudokuNumber[][]) {
  let first3xRows: SudokuNumber[][] = [],
    second3xRows: SudokuNumber[][] = [],
    third3xRows: SudokuNumber[][] = [];

  table.forEach((row, i) => {
    if (i < 3) {
      first3xRows.push(row.slice());
    } else if (i < 6) {
      second3xRows.push(row.slice());
    } else {
      third3xRows.push(row.slice());
    }
  });

  first3xRows = _shuffle1xRows(first3xRows);
  second3xRows = _shuffle1xRows(second3xRows);
  third3xRows = _shuffle1xRows(third3xRows);

  let available3xRows = [first3xRows, second3xRows, third3xRows];
  let firstPosition = available3xRows.splice(
      getRandomIntBetween(0, available3xRows.length),
      1
    )[0],
    secondPosition = available3xRows.splice(
      getRandomIntBetween(0, available3xRows.length),
      1
    )[0],
    thirdPosition = available3xRows[0];

  table = [...firstPosition, ...secondPosition, ...thirdPosition];

  return table;
};

export const shuffleRows = function(table: SudokuNumber[][]) {
  return _shuffleRows(table);
};

const _shuffle1xRows = function(rows3x: SudokuNumber[][]) {
  let firstRow: SudokuNumber[] = rows3x[0],
    secondRow: SudokuNumber[] = rows3x[1],
    thirdRow: SudokuNumber[] = rows3x[2];

  let availableRows = [firstRow, secondRow, thirdRow];
  let firstPosition = availableRows.splice(
      getRandomIntBetween(0, availableRows.length),
      1
    )[0],
    secondPosition = availableRows.splice(
      getRandomIntBetween(0, availableRows.length),
      1
    )[0],
    thirdPosition = availableRows[0];

  rows3x = [firstPosition, secondPosition, thirdPosition];

  return rows3x;
};

const _transponseTable = function(table: SudokuNumber[][]) {
  let rows: SudokuNumber[][] = [];
  table.forEach(row => rows.push(row.slice()));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // j and i in reversed order to change up rows and columns for transponding
      table[j][i] = rows[i][j];
    }
  }

  return table;
};

export const transponseTable = function(table: SudokuNumber[][]) {
  return _transponseTable(table);
};

const _rotateTable = function(table: SudokuNumber[][]) {
  let rows: SudokuNumber[][] = [];
  table.forEach(row => rows.push(row.slice()));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // j and i in reversed order to change up rows and columns for transponding
      table[j][i] = rows[i][-j + 8]; // -j + 8 because we need to fill from bottom to top when rotating
    }
  }

  return table;
};

export const rotateTable = function(table: SudokuNumber[][], count: number) {
  // using modulo 4 because there is no point in rotating more than 4 times
  // since rotating 5 times results in the same as rotating only once (5 % 4 === 1)
  let rotateCount = count !== undefined && count !== null ? count % 4 : 1;

  for (let i = 0; i < rotateCount; i++) {
    table = _rotateTable(table);
  }

  return table;
};

const _horizontallyMirrorTable = function(table: SudokuNumber[][]) {
  let rows: SudokuNumber[][] = [];
  table.forEach(row => rows.push(row.slice()));

  for (let i = 0; i < 4; i++) {
    table[i] = rows[8 - i];
    table[8 - i] = rows[i];
  }

  return table;
};

export const horizontallyMirrorTable = function(table: SudokuNumber[][]) {
  table = _horizontallyMirrorTable(table);

  return table;
};

export const verticallyMirrorTable = function(table: SudokuNumber[][]) {
  table = _transponseTable(table);

  table = _horizontallyMirrorTable(table);

  table = _transponseTable(table);

  return table;
};

export const randomizeTableNumbers = function(table: SudokuNumber[][]) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  type NumberMap = {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
  };

  // mapping base number values to new random values
  let numberMap: { [key: string]: number } = {
    1: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    2: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    3: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    4: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    5: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    6: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    7: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    8: numbers.splice(getRandomIntBetween(0, numbers.length), 1)[0],
    9: numbers[0]
  };

  table.forEach((row, i) => {
    row.forEach((num, j) => {
      if (num) {
        table[i][j] = numberMap[num];
      }
    });
  });

  return table;
};
