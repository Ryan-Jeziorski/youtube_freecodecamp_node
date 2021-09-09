//import the read and write file sync form fs
const {readFile, writeFile}  = require('fs');

//start the program
console.log('start async example');

//lskdhjflg
readFile('./content/first.txt', 'utf8', (err, result) => {
    //if an error occures print out the error
    if (err) {
        console.log(err);
        return;
    }

    //
    const first = result;   // store result of readfile in first
    
    // call readfile again for second file
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        //
        const second = result; //store result of second readfile in second

        //call write file to write the contents of first and second to results async
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('finishiuejkdshf');
            }
        );
    });
});

//just outputting status to console
console.log('done with this task');
console.log('starting the next one');

