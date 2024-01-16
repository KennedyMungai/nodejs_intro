const fs = require('fs')
const path = require('path')


fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8',(err, data) => {
    if(err) throw err;
    console.log(data);
})

console.log('Hello...')

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})