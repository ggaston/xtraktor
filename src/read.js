const fs = require('fs');

const read = function(filePath) {
    const readableStream = fs.createReadStream(filePath, 'utf-8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        console.log(chunk);
    })
}

module.exports = read

