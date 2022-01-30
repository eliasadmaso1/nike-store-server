const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/favoritesController");

Router.get("/:userId",Controller.getAllFavorites);
Router.post("/add-favorite",Controller.addFavorite);

module.exports = Router;