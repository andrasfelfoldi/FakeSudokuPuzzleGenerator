"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableToString = function (table) {
    if (!table) {
        return "Not a valid table!";
    }
    var tableString = "";
    table.forEach(function (row) {
        row.forEach(function (number) {
            tableString += number !== null ? number : ".";
        });
    });
    return tableString;
};
exports.printTable = function (table) {
    if (!table) {
        return "Not a valid table!";
    }
    var tableString = "";
    table.forEach(function (row, i) {
        if (i === 3 || i === 6) {
            console.log("--------------------------------------------------");
        }
        tableString = "";
        row.forEach(function (number, j) {
            if (j === 3 || j === 6) {
                tableString += "|";
            }
            if (j === 2 || j === 5) {
                tableString += number !== null ? number : " ";
            }
            else {
                tableString += number !== null ? number + "\t" : "\t";
            }
        });
        console.log(tableString);
        if (i !== 2 && i !== 5 && i !== 8) {
            console.log("\t\t |\t\t |\t\t");
        }
    });
    return tableString;
};
