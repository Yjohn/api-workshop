const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const mongoose = require('mongoose');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/apiworkshop';
mongoose.Promise = global.Promise;


router.get('/', function (req, res, next) {
    // const callBack = (error, products) => {
    //     if (error) {
    //         res.sendStatus(500)
    //     } else {
    //         res.render('index', {
    //             title: 'CYF',
    //             description: 'We sell the finest goods and services.',
    //             products
    //         });
    //     }
    // }
    Product.find({})
        .then((products) => {
            res.render('index', {
                title: 'CYF',
                description: 'We sell the finest goods and services.',
                products
            });
        }).catch((err) => {
            res.sendStatus(500)
        });

    mongoose.connect(mongoConnection);
    // Product.find({}, callBack);

});

/* GET single-product information page. */
router.get('/products/:id', function (req, res, next) {
    // const id = req.params.id;
    // const callBack = (error, products) => {
    //     if (error) {
    //         res.sendStatus(500)
    //     } else {
    //         res.render('single-product', {
    //             title: products.title,
    //             description: `We sell the finest goods and services. 
    //             This is the ${products.title}.`,
    //             product: products
    //         });
    //     }
    // }
    mongoose.connect(mongoConnection);
    
    const id = req.params.Id;
    Product.find({id})
        .then((products) => {
            res.render('single-product', {
                title: products[0].title,
                description: `We sell the finest goods and services. 
                        This is the ${products[0].title}.`,
                product: products[0]
            });
        }).catch((err) => {
            res.sendStatus(500)
        });

    // Product.findById(id, callBack);

});

fetch('/api/products')
.then(res => res.json())
.then((products) => {
    products.forEach((product) => {
        const element = document.createElement('h2');
        element.innerText = product.title;
        document.body.appendChild(element);
    })
})

router.get("/sayHello/:name/:lastname", function (req, res, next) {
    //res.send ("hello" + req.params.name)
    const greating = `hello ${req.params.name} ${req.params.lastname}`;
    //const greating = req.query.greeting + req.params.name + req.params.lastname;
    res.send(greating);
});
router.get('/products', (req, res) => {
    res.send('all goods');
});
router.post('/products', (req, res) => {
    const product = req.body;
    res.send('posted' + product.title);
});

router.delete('/products', (req, res) => {
    res.send('deleted');
})

module.exports = router;