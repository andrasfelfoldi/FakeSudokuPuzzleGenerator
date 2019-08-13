"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Random_1 = require("./Random");
var veryEasy = [
    [
        [null, 8, null, null, null, null, null, null, null],
        [null, 6, null, null, 1, null, null, null, 5],
        [null, null, 5, 8, null, 2, null, 4, 7],
        [null, null, 8, 4, null, null, null, 9, 1],
        [null, 9, null, null, null, null, null, 8, null],
        [null, null, null, 6, null, null, 7, null, null],
        [null, null, null, null, 5, null, null, 3, null],
        [null, null, null, null, null, null, null, null, null],
        [2, 1, null, null, 6, null, null, null, 9]
    ],
    [
        [5, null, 2, null, null, null, null, 1, null],
        [null, null, 7, null, 8, 4, 6, null, null],
        [null, null, null, 3, null, null, null, 2, null],
        [null, 3, null, null, null, 7, null, null, null],
        [8, null, 5, null, null, 6, 2, null, null],
        [null, null, null, 1, 4, null, null, null, null],
        [null, 9, 8, null, null, null, 5, null, null],
        [1, null, null, 6, null, null, 4, null, null],
        [null, 4, null, null, 5, null, null, null, null]
    ],
    [
        [null, null, null, null, null, null, 1, null, null],
        [null, 2, null, 1, 7, null, null, null, 4],
        [null, 7, null, null, null, null, 8, null, 9],
        [5, null, null, null, null, 3, null, null, 7],
        [null, null, null, 8, 4, null, null, null, null],
        [7, null, 2, null, null, 9, 4, null, null],
        [null, null, 8, null, 3, null, null, null, null],
        [4, null, null, 5, null, null, 9, null, 3],
        [null, 1, null, null, null, 8, null, null, null]
    ],
    [
        [null, 4, null, null, 6, null, null, 9, null],
        [null, null, null, null, 7, null, 8, null, 1],
        [null, null, null, 5, null, 8, 2, null, null],
        [2, null, null, null, 8, null, null, null, 5],
        [null, null, 8, null, null, null, null, 1, 2],
        [7, null, null, 9, null, 3, null, null, null],
        [null, null, null, null, 5, 4, 6, null, null],
        [null, null, null, null, null, null, null, null, 3],
        [null, null, null, 7, null, null, null, null, 4]
    ],
    [
        [null, null, null, null, null, null, null, 7, 2],
        [null, null, null, null, 4, null, 6, null, null],
        [null, null, null, null, null, null, 5, null, null],
        [null, null, 6, 4, null, 3, null, 5, null],
        [null, 8, null, null, null, 6, 1, null, null],
        [3, 9, 1, 2, null, null, null, 4, null],
        [7, null, null, null, 8, null, null, null, null],
        [null, null, null, 1, null, null, null, null, null],
        [null, null, 4, 9, 6, null, null, null, 8]
    ],
    [
        [null, null, 9, null, 1, 4, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [3, 6, null, null, null, null, 7, null, 4],
        [8, null, 1, null, null, 5, 9, null, null],
        [4, 2, 7, null, null, null, 6, null, null],
        [null, null, null, null, 7, null, null, null, null],
        [null, null, 4, null, 9, 1, null, 8, null],
        [7, null, null, null, null, null, null, null, 6],
        [null, null, null, 5, null, null, null, 3, null]
    ],
    [
        [null, 6, null, null, null, 5, null, 3, 2],
        [null, 5, null, null, 4, null, 1, null, null],
        [null, null, null, null, 7, null, null, 6, null],
        [null, 1, 3, null, null, null, null, null, null],
        [5, null, null, null, null, 4, null, null, 3],
        [2, null, null, null, null, null, null, null, null],
        [null, 8, null, null, 1, 2, 4, 7, null],
        [null, 4, null, 7, null, null, null, null, 6],
        [null, null, null, null, 6, null, 8, 9, null]
    ],
    [
        [null, 1, null, null, null, null, 3, 4, null],
        [null, null, 2, null, 4, null, null, null, null],
        [null, null, null, null, null, 1, 7, null, 2],
        [9, null, null, 1, null, null, null, null, 5],
        [null, null, null, 6, null, 2, null, 3, 9],
        [1, null, null, 3, null, null, null, null, 4],
        [null, null, null, 5, 2, 7, null, null, null],
        [null, 9, null, null, 8, 6, null, null, null],
        [null, null, null, null, null, null, 2, null, null]
    ],
    [
        [3, null, null, null, null, null, 5, null, null],
        [8, null, 2, null, null, null, null, 7, null],
        [7, 9, null, null, null, 5, null, null, 2],
        [null, null, null, 3, null, 4, 7, null, null],
        [null, null, null, null, null, 6, null, 4, 3],
        [null, 1, null, null, 5, 8, null, 9, null],
        [null, null, null, 6, 2, null, null, 5, null],
        [null, 3, null, null, null, null, 8, null, null],
        [null, null, null, null, null, null, null, 1, null]
    ]
];
var easy = [
    [
        [null, null, null, null, null, null, 2, null, null],
        [9, 7, 6, null, null, null, null, 5, null],
        [null, null, null, null, 8, 3, null, null, null],
        [8, null, 1, null, null, null, null, null, null],
        [5, null, 7, null, null, null, 6, 4, 1],
        [null, null, null, 2, null, null, null, null, null],
        [null, null, null, 8, null, null, null, null, 4],
        [null, 4, null, null, 9, 5, 3, null, 2],
        [7, null, 5, null, null, null, null, null, null]
    ],
    [
        [6, null, null, null, null, null, 3, null, null],
        [null, null, 5, null, 3, 7, null, null, null],
        [null, null, null, 5, null, null, null, null, null],
        [null, 7, null, 3, 8, null, null, 4, null],
        [null, 2, null, null, 1, null, null, null, null],
        [null, null, 8, null, null, 6, null, 9, null],
        [8, null, null, 6, null, 9, null, null, null],
        [null, null, 4, null, null, 8, 7, null, null],
        [null, 9, 2, 7, null, null, null, null, 6]
    ],
    [
        [null, null, 1, null, null, 9, null, 4, null],
        [6, null, null, null, 4, null, null, null, null],
        [null, 2, 8, null, null, null, 9, 3, null],
        [null, null, null, null, null, null, 6, 7, null],
        [null, null, null, 8, null, null, null, null, 4],
        [null, null, null, 5, 2, 4, 3, null, null],
        [null, null, null, 1, null, null, 5, 6, null],
        [null, null, 6, null, null, null, null, null, 2],
        [1, null, 5, 9, null, null, null, null, null]
    ],
    [
        [8, 7, null, null, null, null, null, null, null],
        [9, null, null, null, 4, null, null, 5, null],
        [4, null, null, null, 2, 9, 7, null, null],
        [null, 6, null, null, 7, 5, null, null, 3],
        [null, null, null, null, 3, null, null, null, 9],
        [null, null, null, null, null, null, 2, null, null],
        [null, null, null, null, null, 7, null, null, null],
        [null, null, 3, 4, null, null, 9, null, null],
        [2, 8, 5, null, null, null, null, null, null]
    ],
    [
        [null, null, null, null, null, null, 7, null, null],
        [null, 4, null, null, 5, null, 1, null, null],
        [6, 9, 2, null, null, null, null, 3, null],
        [null, null, 1, null, null, 9, null, null, null],
        [null, 5, null, null, null, 6, null, 8, null],
        [null, 2, null, 7, null, 4, null, 9, null],
        [7, null, 9, null, null, null, null, null, 3],
        [null, null, null, null, null, null, null, 7, null],
        [null, 8, null, null, 6, null, null, null, null]
    ],
    [
        [5, null, null, null, 1, null, 9, null, 4],
        [null, 9, null, 6, null, null, 7, null, null],
        [6, null, null, null, null, null, null, 1, null],
        [null, null, null, null, null, 3, 5, null, null],
        [2, null, null, null, null, null, null, null, 3],
        [null, 5, 9, 8, null, null, null, null, null],
        [null, null, null, null, null, null, 1, null, null],
        [null, 4, null, 3, null, 8, null, null, 6],
        [null, 3, null, 9, null, null, null, 4, null]
    ],
    [
        [null, 3, null, null, null, null, null, null, 4],
        [null, null, null, 6, null, null, 1, null, null],
        [4, null, null, null, 2, 7, null, null, null],
        [null, null, null, null, 4, null, null, 2, 5],
        [null, null, 7, null, null, null, null, null, null],
        [6, null, 8, null, null, 1, null, null, null],
        [null, null, null, null, 8, null, 7, null, null],
        [null, 1, null, null, null, null, null, 6, null],
        [null, null, 3, null, null, 5, null, null, 8]
    ],
    [
        [null, null, 3, 6, null, 2, null, 9, null],
        [null, null, null, 9, null, null, null, null, null],
        [null, null, 6, 1, 7, null, 2, null, null],
        [7, null, null, null, null, null, null, 8, null],
        [null, null, null, null, 8, 5, 3, null, null],
        [null, null, 9, null, null, null, null, null, null],
        [4, null, null, 7, null, 9, 1, null, null],
        [null, null, null, null, 4, null, null, null, 2],
        [null, null, null, null, null, 1, 7, 5, null]
    ],
    [
        [8, null, 4, 1, null, null, null, null, null],
        [null, null, 1, 9, 3, 2, null, null, 4],
        [null, null, null, null, null, null, 1, null, null],
        [1, 5, null, null, null, null, null, 7, null],
        [null, null, null, null, null, 7, null, 1, 6],
        [2, null, null, null, null, 5, null, null, null],
        [6, null, null, null, null, 1, null, 5, null],
        [null, null, null, 3, null, null, 2, null, null],
        [null, null, null, 4, null, null, null, null, 7]
    ],
    [
        [4, null, null, null, null, 1, 8, null, null],
        [null, null, null, null, 6, null, null, null, 5],
        [null, 5, 1, null, null, null, null, null, null],
        [9, null, 3, 8, 5, null, null, 2, null],
        [null, null, null, null, null, 7, null, 6, null],
        [null, null, null, null, null, null, null, null, 9],
        [6, 7, null, null, null, 3, null, 4, null],
        [null, null, null, 4, null, 8, 2, null, null],
        [null, 3, null, null, null, null, null, null, null]
    ]
];
var medium = [
    [
        [null, null, null, null, null, null, null, null, null],
        [null, null, 8, null, 2, 6, null, null, null],
        [3, null, null, null, null, null, 1, 8, 9],
        [null, null, null, 9, 5, null, null, null, 3],
        [7, null, 9, null, null, null, null, null, null],
        [4, null, null, null, 6, 1, 5, null, null],
        [1, null, null, 3, null, null, 2, null, 5],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, 5, 8, null, null, null, null]
    ],
    [
        [null, null, 9, null, 5, null, 2, null, 7],
        [null, null, null, 1, null, null, null, null, null],
        [2, 1, null, null, 6, null, 4, null, 5],
        [1, 4, null, null, 7, null, null, null, null],
        [null, 6, 2, null, null, null, null, null, null],
        [null, null, null, 5, 2, 9, null, null, null],
        [null, null, null, 7, null, null, null, null, 8],
        [null, null, 1, null, null, null, null, 3, null],
        [5, 8, null, null, null, null, null, null, null]
    ],
    [
        [1, null, null, null, 7, null, null, 2, null],
        [null, null, 5, null, null, null, null, null, null],
        [null, 8, null, null, null, 3, 6, null, null],
        [6, 5, null, null, 3, 1, null, null, null],
        [null, null, null, 5, null, null, null, 6, null],
        [3, null, 9, null, 6, null, 7, null, 1],
        [5, null, 2, null, null, 4, null, null, null],
        [null, null, null, null, null, null, null, 9, null],
        [9, null, 4, null, null, null, 8, null, null]
    ],
    [
        [9, 5, null, 1, null, null, 2, null, null],
        [null, 7, null, 3, null, null, null, null, null],
        [null, null, null, null, null, 2, null, 6, 9],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, 5, null, null, null, null, null],
        [null, null, 4, null, 3, 9, null, null, 8],
        [7, null, 6, null, null, null, null, null, 3],
        [8, null, null, null, null, null, 1, 4, 6],
        [3, null, null, null, null, null, null, 9, 5]
    ],
    [
        [null, 4, null, null, 8, null, null, null, null],
        [null, null, null, null, 9, 1, 6, null, null],
        [null, null, null, null, null, null, 3, 5, null],
        [5, null, null, null, null, null, null, null, null],
        [null, null, 6, 3, null, 8, null, null, 1],
        [null, null, 7, 9, null, null, null, null, null],
        [7, 3, 9, 1, null, 4, null, 8, null],
        [2, 8, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 1, 2, null]
    ],
    [
        [null, 8, null, 5, 4, null, null, null, null],
        [null, null, null, null, null, 6, null, 1, 3],
        [null, null, null, null, null, null, 8, 6, null],
        [null, 2, null, null, null, null, null, null, 7],
        [null, null, 4, null, null, null, 9, null, null],
        [9, 3, null, null, 6, null, null, null, null],
        [null, 6, null, 2, null, null, 7, null, null],
        [5, null, null, 3, null, null, 4, 2, null],
        [null, null, 7, null, 5, 1, null, null, null]
    ],
    [
        [null, null, null, null, null, null, null, null, null],
        [null, 8, null, 7, 9, 1, null, null, null],
        [1, null, null, null, null, null, 7, 5, null],
        [null, null, null, null, 3, null, null, null, null],
        [9, null, 7, 5, null, null, null, 4, 2],
        [5, null, 2, 9, 7, 4, null, null, null],
        [8, null, null, 1, null, null, null, null, null],
        [null, null, null, null, 2, null, null, null, 9],
        [null, null, 4, null, 5, 9, null, 2, null]
    ],
    [
        [null, null, null, null, null, null, null, null, null],
        [1, null, 5, null, null, null, 2, 8, null],
        [null, null, 6, null, 7, 8, null, null, null],
        [3, null, null, null, null, null, 7, null, null],
        [null, null, 8, 7, 1, 3, null, null, 4],
        [null, null, null, 8, null, null, null, null, null],
        [8, null, 3, null, null, null, null, 4, null],
        [2, null, null, 6, null, null, 5, 1, null],
        [null, null, null, null, null, 4, null, null, 7]
    ],
    [
        [6, 9, null, 1, null, null, null, null, null],
        [null, null, null, null, 3, null, null, 8, null],
        [3, null, null, 2, null, 9, null, null, null],
        [null, null, 8, null, 1, null, null, 3, null],
        [4, null, null, null, null, null, null, null, null],
        [5, null, null, null, null, 6, 8, null, null],
        [null, null, 2, 3, null, 8, 4, null, null],
        [null, null, 7, null, 9, 4, 2, null, null],
        [null, null, null, null, null, null, null, 5, null]
    ],
    [
        [null, null, null, null, 7, null, null, 1, null],
        [4, 6, null, null, 1, null, 3, null, null],
        [null, null, 5, 4, null, null, null, 7, null],
        [7, null, null, null, null, 3, 4, null, null],
        [null, null, null, null, null, null, null, null, 9],
        [6, null, 2, 9, null, null, null, null, 5],
        [null, 8, null, null, 2, null, 5, null, null],
        [null, null, null, null, null, null, null, 2, null],
        [null, 5, null, null, null, null, null, 9, 1]
    ]
];
var hard = [
    [
        [null, null, null, null, null, 9, 5, null, null],
        [null, 4, null, null, null, 2, null, null, 8],
        [null, null, null, 1, null, 3, null, null, 9],
        [null, null, 6, null, null, 5, null, null, null],
        [null, null, 4, 9, null, null, null, null, null],
        [null, null, null, 2, 7, 6, null, 3, null],
        [5, 3, null, null, null, null, 1, null, null],
        [null, 1, null, null, null, null, null, 4, 5],
        [null, null, null, 6, null, null, 8, null, null]
    ],
    [
        [null, null, 3, 2, null, 9, 5, null, null],
        [8, null, null, null, 5, null, null, null, null],
        [null, null, null, null, null, null, null, null, 2],
        [null, 3, null, null, null, 8, null, null, null],
        [null, null, null, null, null, null, 6, 1, null],
        [null, 9, null, 1, null, null, null, null, 7],
        [null, null, null, null, null, 6, null, null, 9],
        [null, 6, 1, 3, null, null, null, 8, null],
        [null, 8, 5, 7, null, null, 3, null, null]
    ],
    [
        [5, null, null, null, null, null, null, null, null],
        [null, 3, null, 9, 6, null, null, 7, null],
        [2, null, null, null, null, 4, 8, null, null],
        [null, null, 5, null, null, null, null, 8, 1],
        [null, null, 9, null, 7, null, null, null, null],
        [1, 6, null, 5, null, null, null, null, 7],
        [3, 8, 7, null, 2, 5, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 8, null, 6, null]
    ],
    [
        [2, null, null, null, 8, null, null, null, null],
        [null, 4, null, null, null, 9, 6, null, null],
        [null, null, 6, 2, null, null, null, null, null],
        [5, null, null, 1, null, null, null, 6, null],
        [6, null, null, null, null, null, 3, null, null],
        [1, null, 9, 7, null, 8, null, null, 2],
        [null, null, 8, null, null, null, 4, 3, null],
        [3, null, null, null, 7, null, null, null, null],
        [null, 1, null, 3, null, 5, null, null, null]
    ],
    [
        [3, null, null, null, null, 9, 1, null, 2],
        [null, 5, 8, null, null, null, 9, 7, null],
        [7, null, null, null, null, null, null, null, null],
        [null, null, null, null, 4, 3, null, null, null],
        [null, null, 3, 9, null, null, null, null, null],
        [9, null, null, 7, null, null, null, null, null],
        [null, 9, null, null, 6, null, 5, 1, 3],
        [null, null, 2, null, 8, null, 4, null, null],
        [null, null, 5, null, null, 4, 2, null, null]
    ],
    [
        [null, null, null, 1, 5, null, 8, 3, null],
        [null, null, 9, null, 7, 4, null, null, null],
        [null, null, null, null, null, null, null, null, 6],
        [null, 9, null, null, 4, 1, null, null, 2],
        [null, null, null, null, null, 3, 6, 5, null],
        [3, null, 2, null, null, null, null, null, 4],
        [null, 5, null, 9, null, null, null, 8, 3],
        [6, null, null, null, null, null, 4, null, null],
        [null, 2, null, null, null, null, null, null, null]
    ],
    [
        [null, null, 5, null, null, 4, 8, null, null],
        [null, 1, null, null, 9, 2, null, null, 3],
        [9, null, 2, null, null, null, null, 5, null],
        [null, 6, null, null, null, null, null, 3, 9],
        [null, null, 3, null, null, 1, 7, null, null],
        [null, null, null, null, null, null, null, null, null],
        [5, null, null, 4, null, null, null, 8, null],
        [6, null, null, null, 3, 5, null, null, null],
        [null, null, 9, 1, null, null, null, null, 7]
    ],
    [
        [8, null, null, 7, null, 5, 9, null, null],
        [7, null, 6, 2, null, null, null, null, null],
        [null, 9, null, null, null, null, null, 7, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, 6, null, 4, null, null, 3],
        [null, null, null, 5, 2, null, null, 1, 4],
        [null, null, null, null, 8, null, null, null, 1],
        [4, null, null, null, null, 1, null, 3, 6],
        [null, 3, 8, null, null, null, 2, null, null]
    ],
    [
        [null, null, null, null, 9, null, null, null, 4],
        [null, 4, null, 1, null, null, null, 6, null],
        [null, 2, 7, null, null, null, null, null, 5],
        [null, 9, null, null, null, null, null, null, null],
        [null, null, null, 8, null, 3, 6, null, null],
        [null, null, 6, null, null, 4, 1, 5, null],
        [null, 5, 2, null, null, null, null, 7, null],
        [null, null, null, 4, null, 8, null, null, null],
        [null, null, 3, null, null, 5, null, 4, null]
    ],
    [
        [null, null, null, null, null, null, 9, null, 2],
        [null, null, 3, null, null, null, null, 7, null],
        [null, null, 2, 4, 8, null, null, null, null],
        [null, 9, null, 2, null, 6, 5, null, 3],
        [null, null, null, null, null, 1, 4, null, 6],
        [8, null, null, 5, null, null, null, null, null],
        [null, 7, null, null, null, null, null, null, null],
        [null, 2, null, 9, 1, 8, null, null, null],
        [1, 6, null, null, 2, null, null, null, null]
    ]
];
exports.getRandomVeryEasy = function () {
    var puzzle = [];
    veryEasy[Random_1.getRandomIntBetween(0, veryEasy.length)].forEach(function (row) {
        return puzzle.push(row.slice());
    });
    return puzzle;
};
exports.getRandomEasy = function () {
    var puzzle = [];
    easy[Random_1.getRandomIntBetween(0, easy.length)].forEach(function (row) {
        return puzzle.push(row.slice());
    });
    return puzzle;
};
exports.getRandomMedium = function () {
    var puzzle = [];
    medium[Random_1.getRandomIntBetween(0, medium.length)].forEach(function (row) {
        return puzzle.push(row.slice());
    });
    return puzzle;
};
exports.getRandomHard = function () {
    var puzzle = [];
    hard[Random_1.getRandomIntBetween(0, hard.length)].forEach(function (row) {
        return puzzle.push(row.slice());
    });
    return puzzle;
};
