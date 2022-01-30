const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/womenController");

Router.get("/",Controller.getWomenShoes);
Router.post("/",Controller.postWomenShoes);
Router.delete('/',Controller.deleteWomenShoes);


module.exports = Router;