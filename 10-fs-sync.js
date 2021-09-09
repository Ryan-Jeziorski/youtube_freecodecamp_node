//import the read and write file sync form fs
const {readFileSync, writeFileSync }  = require('fs');

//start the program
console.log('start');

//make a first and second file sync
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//print the contents of the files
console.log(first, second);

//write to file
writeFileSync(
    './content/result-sync.txt',
        `Here is the result : ${first}, ${second}`,
        { flag: 'a' }
);

//read and print result file
const result = readFileSync('./content/result-sync.txt', 'utf8');
console.log(result);

//just outputting status to console
console.log('done with this task');
console.log('starting the next one');

