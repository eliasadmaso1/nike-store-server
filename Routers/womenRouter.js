const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/womenController");

Router.get("/",Controller.getWomenShoes);
Router.post("/",Controller.postWomenShoes);
Router.delete('/',Controller.deleteWomenShoes);
Router.put("/update",Controller.updateWomenShoes);



module.exports = Router;