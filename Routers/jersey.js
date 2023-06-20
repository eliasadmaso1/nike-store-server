const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/jersey");

Router.get("/",Controller.get);
Router.post("/",Controller.add)

module.exports = Router;