//create an http server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('hello world')
});

server.listen(5000, () => {
    console.log('Server listening at http://localhost:5000 ...')
})