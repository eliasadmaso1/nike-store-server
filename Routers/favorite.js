const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/favorite");

Router.get("/:userId",Controller.getAllFavorites);
Router.post("/add-favorite",Controller.addFavorite);
Router.delete("/delete-favorite",Controller.deleteFavourite);


module.exports = Router;