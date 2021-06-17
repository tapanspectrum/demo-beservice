module.exports = (app) => {
    const products = require('../controllers/product.controller');

    // Create a new Product
    app.post('/product', products.create);

    // Retrieve all Products
    app.get('/products', products.findAll);

    // Retrieve a single Note with productId
    app.get('/product/:productId', products.findOne);

    // Update a Note with productId
    app.put('/product/:productId', products.update);

    // Delete a Note with productId
    app.delete('/product/:productId', products.delete);
}