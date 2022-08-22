const {Product} = require('../models');

const productData = [
    {
        product_name: 'Shirt',
        price: 10.50,
        stock:25,
        category_id: 1
    },

    {
        product_name: 'Surf Shorts',
        price: 14.50,
        stock: 30,
        category_id: 2
    },

    {
        product_name: 'One Ok Rock',
        price: 15.99,
        stock: 20,
        category_id: 3
    },

    {
        product_name: 'Artemis Fowl',
        price: 9.99,
        stock: 12,
        category_id: 4
    },

    {
        product_name: 'Artemis Fowl the Movie',
        price: 12.50,
        stock: 22,
        category_id:5 
    },
];

const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;