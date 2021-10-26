const express = require('express');
const app = express();

//import logger module we made
const logger = require('./logger')
// req => middleware => res

//app.use tells expresss to use this middleware with every app.get
app.use('/api',logger);


app.get('/', (req, res) => {
    res.send('Home Page!');
});

app.get('/about', (req,res) => {
    res.send('About!');
});

app.get('/api/products', (req,res) => {
    res.send('products!');
});

app.get('/api/items', (req,res) => {
    res.send('items!');
});

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});