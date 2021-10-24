//Import express
const express = require('express');
//invoke express function to create server
const app = express();

// Most common express methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get('/', (req,res) => {
    console.log('User hit the home page')
    res.status(200).send('Home Page');
});

app.get('/about', (req,res) => {
    console.log('User hit the about page')
    res.status(200).send('About Page');
});

app.all('*', (req,res) => {
    res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});

