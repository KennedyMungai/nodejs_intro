const fs = require('fs')


fs.read('./files/starter.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
})