const http = require('http');

//import readFileSync
const {readFileSync} = require('fs');
const { PassThrough } = require('stream');

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

//create http server
const server = http.createServer((req, res) => {
    //save user requested url into a constant
    const url = req.url;

    //if user hits the home page
    if (url === '/'){
        //content type
        res.writeHead(200, {'content-type':'text/html'});

        //debugging info
        console.log('user hit the home page');

        //write to page
        res.write(homePage);
        res.end();

    } 
    //if the user hits the about page
    else if (url === '/styles.css'){ 
        //content type
        res.writeHead(200, {'content-type':'text/css'});

        //debugging info
        console.log('user hit the styles page');

        //write to page
        res.write(homeStyles);
        res.end();

    } 
    else if (url === '/logo.svg') {
        //content type
        res.writeHead(200, {'content-type':'image/svg+xml'});

        //debugging info
        console.log('user hit the logo page');

        //write to page
        res.write(homeImage);
        res.end();

    } 
    else if (url === '/browser-app.js'){
        //content type
        res.writeHead(200, {'content-type':'text/javascript'});

        //debugging info
        console.log('user hit the browser app');

        //write to page
        res.write(homeLogic);
        res.end();

    } 
    else {  
        //Debugging information
        console.log(req.method);
        console.log(req.url);

        //content type
        res.writeHead(404, {'content-type':'text/html'});

        //debugging info
        console.log('user hit the other page');

        //write to page
        res.write('<h1>not the home page</h1>');
        res.end();
    }
});

server.listen(5000);
