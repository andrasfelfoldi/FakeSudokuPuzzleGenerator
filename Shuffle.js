randomGenerator = require('./Random');

module.exports.shuffleColumns = (table) => {
    let first3xColumn = [[], [], []];
    let second3xColumn = [[], [], []];
    let third3xColumn = [[], [], []];

    let column3xNumbers = [first3xColumn, second3xColumn, third3xColumn];
    let firstPosition = column3xNumbers.splice(randomGenerator.getRandomIntBetween(0, column3xNumbers.length), 1)[0],
        secondPosition = column3xNumbers.splice(randomGenerator.getRandomIntBetween(0, column3xNumbers.length), 1)[0],
        thirdPosition = column3xNumbers[0];

    table.forEach(row => {
        table.forEach((number, j) => {
            if(j < 3){
                first3xColumn[j].push(number);
            }else if(j < 6){
                second3xColumn[j - 3].push(number);
            }else{
                third3xColumn[j - 6].push(number);
            }
        });
    });

    table.forEach((row, i) => {
        table.forEach((number, j) => {
            if(j < 3){
                row[j] = firstPosition[i][j];
            }else if(j < 6){
                row[j] = secondPosition[i][j - 3];
            }else{
                row[j] = thirdPosition[i][j - 6];
            }
        });
    });

}

module.exports.transponseTable = (table) => {
    let rows = [];
    table.forEach(row => rows.push(row.slice()));

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            // j and i in reversed order to change up rows and columns for transponding
            table[j][i]=rows[i][j];
        }
    }
}