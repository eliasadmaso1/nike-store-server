const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/cart");

Router.get("/:userId", Controller.getProductsInCart);
Router.post("/add-product", Controller.addProductToCart);
Router.delete("/delete-product", Controller.deleteProductFromCart);
Router.delete("/decrement-product", Controller.decrementProductFromCart);

module.exports = Router;
