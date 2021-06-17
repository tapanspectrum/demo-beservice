const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productId:{type:String,unique : true},
    productName: String, 
    productDescription: String, 
    productPrice: Number 
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);