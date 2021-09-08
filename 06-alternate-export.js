// Alternative syntax for exporting modules
// Called exporting as you go

//export as you go
module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}

//export a single person
module.exports.singlePerson = person
