const Product = require("../Models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addProduct = async (req, res) => {
  try {
    await Product.insertMany([req.body], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllProducts, addProduct };
