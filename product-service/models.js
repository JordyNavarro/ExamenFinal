const mongoose = require('mongoose');
const { productSchema } = require('./schemas');

const productModel = mongoose.model('People', productSchema);

module.exports = {productModel};