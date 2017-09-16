const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const mongoose = require('mongoose');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/apiworkshop';


router.get('/', function (req, res, next) {
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('index', {
                title: 'CYF',
                description: 'We sell the finest goods and services.',
                products
            });
        }
    }

    mongoose.connect(mongoConnection);
    Product.find({}, callBack);

});

/* GET single-product information page. */
router.get('/products/:id', function (req, res, next) {
    const id = req.params.Id;
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('single-product', {
                title: products[0].title,
                description: `We sell the finest goods and services. 
         This is the ${products[0].title}.`,
                product: products[0]
            });
        }
    }

    mongoose.connect(mongoConnection);
    Product.findById(id, callback);

});

module.exports = router;