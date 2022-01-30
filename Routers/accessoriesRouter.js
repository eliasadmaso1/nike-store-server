const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/accessoriesController');

Router.get('/',Controller.getAccessories);
Router.post('/',Controller.postToAccessories);

module.exports = Router;

