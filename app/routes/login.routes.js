module.exports = (app) => {
    const products = require('../controllers/product.controller');

    // Create a new Note
    app.post('/product', products.create);

    // Retrieve all Notes
    app.get('/products', products.findAll);

    // Retrieve a single Note with noteId
    app.get('/product/:productId', products.findOne);

    // Update a Note with noteId
    app.put('/product/:productId', products.update);

    // Delete a Note with noteId
    app.delete('/product/:productId', products.delete);
}