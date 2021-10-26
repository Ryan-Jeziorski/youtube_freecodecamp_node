// Import statements
const express = require('express');
const app = express();
const {products} = require('./data.js'); // import products from data.js

// Set home page route
app.get('/', (req,res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>');
});

// set up route for api/products
app.get('/api/products', (req,res) => {
    //create a new product object from the products json file
    const newProduct = products.map((product) =>{
        const{id,name,image} = product;
        return{id,name,image};
    });

    //send new product
    res.send(newProduct);
});

// set up route for sending back just a single prodcut
app.get('/api/products/:productID', (req,res) => {
    //create a new product object from the products json file
    const {productID} = req.params;

    //creating a single product with the find function
    const singleProduct = products.find(
        //checking if product is the id we're looking for
        (product) => product.id === Number(productID)
    );

    // If the product is not found send a 404 error
    if (!singleProduct) {
        return res.status(404).send('Product data not found');
    }
    return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })

app.get('/api/v1/query', (req,res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    };
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    };
    if(sortedProducts.length < 1) {
        return res.status(200).json({sucess: true, data: [] });
    };
    res.status(200).json(sortedProducts);   
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
});