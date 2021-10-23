const {createReadStream} = require('fs');

// default 64kb
// last buffer - remainder
// highwatermark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark:90000});
// const stream = createReadStream('../content/big.txt', {encoding:'utf-8'});

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, 
    encoding: 'utf8'});

stream.on('data', (result) => {
    console.log(result);
});