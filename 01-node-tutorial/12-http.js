//This is a file that creates a basic http server

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.end('Welcome to our home page');
    }
    else if(req.url == '/about') {
        res.end('Welcome to the about me page');
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seam to find the page you are looking for</p>
        <a href="/">Back Home!</a>
        `);
    }
    //console.log(req);
});

server.listen(5000);

