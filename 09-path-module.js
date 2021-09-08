//import the path module into path
const path = require('path');

//log it
console.log(path.sep);
// join filepaths
const filePath = path.join('/content', 'subFolder', 'test.txt');
console.log(filePath);

//
const base = path.basename(filePath);
console.log(base);

//
const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt');
console.log(absolute);
