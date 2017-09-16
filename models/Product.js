const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    urlPath: String,
    title: String,
    price: Number,
    rating: String,
    commentCount: Number,
    isTopRated: Boolean
});

const Products = mongoose.model('product', schema);

module.exports = Products;