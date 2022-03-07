const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/menController");

Router.get("/",Controller.getMenShoes);
Router.post("/",Controller.postMenShoes);
Router.put("/update",Controller.updateShoe);



module.exports = Router;