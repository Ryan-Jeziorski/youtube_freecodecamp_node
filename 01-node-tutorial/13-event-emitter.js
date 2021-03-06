const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.emit('response');

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name}, with id ${id}`);
});

customEmitter.on('response', () => {
    console.log('some other logic here ');
});

customEmitter.emit('response');

customEmitter.on('response', () => {
    console.log('Even more logic here! ');
});

customEmitter.emit('response', 'john', 34);