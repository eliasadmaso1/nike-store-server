const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/shirt");

Router.get("/",Controller.getShirts);
Router.post("/",Controller.postShirts);
Router.put("/update",Controller.updateShirt);



module.exports = Router;