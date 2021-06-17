const productModel = require('../models/product.model');

// Create and Save a new product
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "product content can not be empty"
        });
    }

    // Create a product
    const productmodel = new productModel({
        ProductName: req.body.productname || "Untitled ProductName",
        ProductDescription: req.body.productdescription || "Untitled ProductDescription",
        ProductPrice:req.body.productprice || 1000
    });

    // Save product in the database
    productmodel.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the products."
            });
        });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    productModel.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    productModel.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + req.params.productId
        });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
       // Validate Request
       if(!req.body) {
        return res.status(400).send({
            message: "product content can not be empty"
        });
    }

    // Find product and update it with the request body
    productModel.findByIdAndUpdate(req.params.productId, {
        ProductName: req.body.productname || "Untitled product",
        ProductDescription: req.body.productdescription || '',
        ProductPrice:req.body.productprice
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    productModel.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });
        }
        res.send({message: "product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
};