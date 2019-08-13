"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Random_1 = require("./Random");
exports.shuffleColumns = function (table) {
    // shuffling the rows of a transponsed table
    // is the same is shuffling the columns of a normal table
    table = _transponseTable(table);
    table = _shuffleRows(table);
    // transponsing it back
    table = _transponseTable(table);
    return table;
};
var _shuffleRows = function (table) {
    var first3xRows = [], second3xRows = [], third3xRows = [];
    table.forEach(function (row, i) {
        if (i < 3) {
            first3xRows.push(row.slice());
        }
        else if (i < 6) {
            second3xRows.push(row.slice());
        }
        else {
            third3xRows.push(row.slice());
        }
    });
    first3xRows = _shuffle1xRows(first3xRows);
    second3xRows = _shuffle1xRows(second3xRows);
    third3xRows = _shuffle1xRows(third3xRows);
    var available3xRows = [first3xRows, second3xRows, third3xRows];
    var firstPosition = available3xRows.splice(Random_1.getRandomIntBetween(0, available3xRows.length), 1)[0], secondPosition = available3xRows.splice(Random_1.getRandomIntBetween(0, available3xRows.length), 1)[0], thirdPosition = available3xRows[0];
    table = firstPosition.concat(secondPosition, thirdPosition);
    return table;
};
exports.shuffleRows = function (table) {
    return _shuffleRows(table);
};
var _shuffle1xRows = function (rows3x) {
    var firstRow = rows3x[0], secondRow = rows3x[1], thirdRow = rows3x[2];
    var availableRows = [firstRow, secondRow, thirdRow];
    var firstPosition = availableRows.splice(Random_1.getRandomIntBetween(0, availableRows.length), 1)[0], secondPosition = availableRows.splice(Random_1.getRandomIntBetween(0, availableRows.length), 1)[0], thirdPosition = availableRows[0];
    rows3x = [firstPosition, secondPosition, thirdPosition];
    return rows3x;
};
var _transponseTable = function (table) {
    var rows = [];
    table.forEach(function (row) { return rows.push(row.slice()); });
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            // j and i in reversed order to change up rows and columns for transponding
            table[j][i] = rows[i][j];
        }
    }
    return table;
};
exports.transponseTable = function (table) {
    return _transponseTable(table);
};
var _rotateTable = function (table) {
    var rows = [];
    table.forEach(function (row) { return rows.push(row.slice()); });
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            // j and i in reversed order to change up rows and columns for transponding
            table[j][i] = rows[i][-j + 8]; // -j + 8 because we need to fill from bottom to top when rotating
        }
    }
    return table;
};
exports.rotateTable = function (table, count) {
    // using modulo 4 because there is no point in rotating more than 4 times
    // since rotating 5 times results in the same as rotating only once (5 % 4 === 1)
    var rotateCount = count !== undefined && count !== null ? count % 4 : 1;
    for (var i = 0; i < rotateCount; i++) {
        table = _rotateTable(table);
    }
    return table;
};
var _horizontallyMirrorTable = function (table) {
    var rows = [];
    table.forEach(function (row) { return rows.push(row.slice()); });
    for (var i = 0; i < 4; i++) {
        table[i] = rows[8 - i];
        table[8 - i] = rows[i];
    }
    return table;
};
exports.horizontallyMirrorTable = function (table) {
    table = _horizontallyMirrorTable(table);
    return table;
};
exports.verticallyMirrorTable = function (table) {
    table = _transponseTable(table);
    table = _horizontallyMirrorTable(table);
    table = _transponseTable(table);
    return table;
};
exports.randomizeTableNumbers = function (table) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // mapping base number values to new random values
    var numberMap = {
        1: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        2: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        3: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        4: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        5: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        6: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        7: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        8: numbers.splice(Random_1.getRandomIntBetween(0, numbers.length), 1)[0],
        9: numbers[0]
    };
    table.forEach(function (row, i) {
        row.forEach(function (num, j) {
            if (num) {
                table[i][j] = numberMap[num];
            }
        });
    });
    return table;
};
