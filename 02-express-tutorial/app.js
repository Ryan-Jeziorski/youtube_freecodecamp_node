const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    //if user hits the home page
    if (url === '/'){
        console.log(req.method);
        console.log(req.url);

        res.writeHead(200, {'content-type':'text/html'});
        console.log('user hit the home page');
        res.write('<h1>home page</h1>');
        res.end();

    } else if (url === '/about'){ 
        console.log(req.method);
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'});
        console.log('user hit the abouit page');
        res.write('<h1>about page</h1>');
        res.end();

    } else {  // otherwise
        console.log(req.method);
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'});
        console.log('user hit the other page');
        res.write('<h1>not the home page</h1>');
        res.end();
    }
});

server.listen(5000);
