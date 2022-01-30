const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/kidsController");

Router.get("/",Controller.getKidsShoes);
Router.get("/:id",Controller.getKidsShoesById)
Router.post("/",Controller.postKidsShoes);


module.exports = Router;