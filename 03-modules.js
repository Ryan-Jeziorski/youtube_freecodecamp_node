// Modules
// See ./04-names for list of names
// and ./05-utils for function

//requires
const names = require('./04-names'); //for names of variables
const sayHi = require('./05-utils');    //for sayHi utility
const data = require('./06-alternate-export')
console.log(data)

sayHi(data.singlePerson.name);
sayHi(names.john);
sayHi(names.peter);
sayHi('susan');

//console.log(module);
