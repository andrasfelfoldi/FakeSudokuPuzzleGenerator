module.exports.tableToString = (table) => {
    if(!table){
        return "Not a valid table!";
    }

    let tableString = '';
    table.forEach(row => {
        row.forEach(number => {
            tableString += number !== null ? number : ".";
        })
    });

    return tableString;
}

module.exports.printTable = (table) => {
    if(!table){
        return "Not a valid table!";
    }

    let tableString = '';
    table.forEach((row, i) => {
        if(i === 3 || i === 6){
            console.log('--------------------------------------------------')
        }

        tableString = '';

        row.forEach((number, j) => {
            if(j === 3 || j === 6){
                tableString += '|';
            }
            if(j === 2 || j === 5){
                tableString += number !== null ? number : " ";
            }else{
                tableString += number !== null ? (number + '\t') : "\t";
            }
            
        })

        console.log(tableString);
        if(i !== 2 && i !== 5 && i !== 8){
            console.log('\t\t |\t\t |\t\t');
        }
    });

    return tableString;
}