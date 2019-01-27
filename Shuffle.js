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