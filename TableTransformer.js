randomGenerator = require('./Random');

exports.shuffleColumns = (table) => {
    // shuffling the rows of a transponsed table
    // is the same is shuffling the columns of a normal table
    table = _transponseTable(table);

    table = _shuffleRows(table);

    // transponsing it back
    table = _transponseTable(table);

    return table;
}

_shuffleRows = (table) => {
    let first3xRows = [],
        second3xRows = [],
        third3xRows = [];

    table.forEach((row, i) => {
        if(i<3){
            first3xRows.push(row.slice());
        }else if(i<6){
            second3xRows.push(row.slice());
        }else{
            third3xRows.push(row.slice());
        }
    });

    first3xRows = _shuffle1xRows(first3xRows);
    second3xRows = _shuffle1xRows(second3xRows);
    third3xRows = _shuffle1xRows(third3xRows);

    let available3xRows = [first3xRows, second3xRows, third3xRows];
    let firstPosition = available3xRows.splice(randomGenerator.getRandomIntBetween(0, available3xRows.length), 1)[0],
        secondPosition = available3xRows.splice(randomGenerator.getRandomIntBetween(0, available3xRows.length), 1)[0],
        thirdPosition = available3xRows[0];

    table = [...firstPosition, ...secondPosition, ...thirdPosition];

    return table;
}

exports.shuffleRows = (table) => {
    return _shuffleRows(table);
}

_shuffle1xRows = (rows3x) => {
    let firstRow = rows3x[0],
        secondRow = rows3x[1],
        thirdRow = rows3x[2];

    let availableRows = [firstRow, secondRow, thirdRow];
    let firstPosition = availableRows.splice(randomGenerator.getRandomIntBetween(0, availableRows.length), 1)[0],
        secondPosition = availableRows.splice(randomGenerator.getRandomIntBetween(0, availableRows.length), 1)[0],
        thirdPosition = availableRows[0];

    rows3x = [firstPosition, secondPosition, thirdPosition];

    return rows3x;
}

_transponseTable = (table) => {
    let rows = [];
    table.forEach(row => rows.push(row.slice()));

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            // j and i in reversed order to change up rows and columns for transponding
            table[j][i]=rows[i][j];
        }
    }

    return table;
}

exports.transponseTable = (table) => {
    return _transponseTable(table);
}

_rotateTable = (table) => {
    let rows = [];
    table.forEach(row => rows.push(row.slice()));

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            // j and i in reversed order to change up rows and columns for transponding
            table[j][i]=rows[i][-j + 8]; // -j + 8 because we need to fill from bottom to top when rotating
        }
    }

    return table;
}

exports.rotateTable = (table, count) => {

    // using modulo 4 because there is no point in rotating more than 4 times
    // since rotating 5 times results in the same as rotating only once (5 % 4 === 1)
    let rotateCount = ((count !== undefined) && (count !== null)) ? (count % 4) : 1;

    for(let i=0; i<rotateCount; i++){
        table = _rotateTable(table);
    }

    return table;
}

_horizontallyMirrorTable =(table) => {
    let rows = [];
    table.forEach(row => rows.push(row.slice()));

    for(let i=0; i<4; i++){
        table[i]=rows[8-i];
        table[8-i]=rows[i];
    }

    return table;
}

exports.horizontallyMirrorTable = (table) => {
    return _horizontallyMirrorTable(table);
}

exports.verticallyMirrorTable = (table) => {
    table = _transponseTable(table);

    table = _horizontallyMirrorTable(table);

    table = _transponseTable(table);

    return table;
}

exports.randomizeTableNumbers = (table) => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // mapping base number values to new random values
    let numberMap = {
        1: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        2: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        3: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        4: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        5: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        6: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        7: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        8: numbers.splice(randomGenerator.getRandomIntBetween(0, numbers.length), 1)[0],
        9: numbers[0],
    }

    table.forEach((row, i) => {
        row.forEach((number, j) => {
            if(number){
                table[i][j]=numberMap[number];
            }
        })
    })

    return table;
}