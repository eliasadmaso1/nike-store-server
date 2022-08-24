const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/product');

Router.get('/', Controller.getAllProducts);
Router.post('/',Controller.addProduct);


module.exports = Router;