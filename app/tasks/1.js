const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('/mnt/data/1.csv')
    .on('data', function(data){
        try {
            let result = data.toString().match(/(-?\d+(\.\d+)?)/g).map(v => +v);
            console.log(result);
            // const sumOfNumbers = result.reduce((acc, number) => acc + number, 0);
            // console.log(sumOfNumbers);
        }
        catch(err) {
            console.log('Fiasko!')
        }
    })
    .on('end',function(){
        console.log('CSV file successfully processed');
    });


// let result = data.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
// console.log(result);