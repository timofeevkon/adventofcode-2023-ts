const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('/mnt/data/1.csv')
    .pipe(csv())
    .on('data', function(data){
        try {
            console.log("Name is: "+data.NAME);
            console.log("Age is: "+data.AGE);

            //perform the operation
        }
        catch(err) {
            //error handler
        }
    })
    .on('end',function(){
        //some final operation
    });
