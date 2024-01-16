const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8')
    } catch (err) {
        console.error(err)
    }
}

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8',(err, data) => {
    if(err) throw err;
    console.log(data);
})

// console.log('Hello...')

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'This is some text to be written to the file' ,(err) => {
//     if(err) throw err;
//     console.log('File written successfully');
    
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Some text to be appended to the file', (err) => {
//         if(err) throw err
//         console.log('File appended successfully')
//     })
    
//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'renamed_reply.txt'), (err) => {
//         if(err) throw err
//         console.log('File renamed successfully')
//     })
// })


// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})