const mongoose = require('mongoose');

const ShopItem = mongoose.model('ShopItem',{
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String
});

module.exports = ShopItem;