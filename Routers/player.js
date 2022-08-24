const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/player');

Router.get('/', Controller.getAllPlayers);
Router.post('/',Controller.addPlayer);


module.exports = Router;