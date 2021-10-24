const http = require('http');

//import readFileSync
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./index.html')

//create http server
const server = http.createServer((req, res) => {
    //save user requested url into a constant
    const url = req.url;

    //if user hits the home page
    if (url === '/'){
        //Debugging information
        console.log(req.method);
        console.log(req.url);

        //content type
        res.writeHead(200, {'content-type':'text/html'});

        //debugging info
        console.log('user hit the home page');

        //write to page
        res.write(homePage);
        res.end();

    //if the user hits the about page
    } else if (url === '/about'){ 
        //Debugging information
        console.log(req.method);
        console.log(req.url);

        //content type
        res.writeHead(200, {'content-type':'text/html'});

        //debugging info
        console.log('user hit the abouit page');

        //write to page
        res.write('<h1>about page</h1>');
        res.end();

    } else {  // otherwise
        //Debugging information
        console.log(req.method);
        console.log(req.url);

        //content type
        res.writeHead(200, {'content-type':'text/html'});

        //debugging info
        console.log('user hit the other page');

        //write to page
        res.write('<h1>not the home page</h1>');
        res.end();
    }
});

server.listen(5000);
