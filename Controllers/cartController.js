const cartModel = require("../Models/cartModel");

const getProductsInCart = async (req, res) => {
  const { userId } = req.params;
  try {
    await cartModel.find({userId}, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
};

const addProductToCart = async (req, res) => {
  try {
    const filterById = { productId: req.body.productId ,userId: req.body.userId};
    const existingProduct = await cartModel.findOne(filterById);
    if (existingProduct) {
      const newQuantity = existingProduct.quantity + 1;

      await cartModel.findOneAndUpdate(
        filterById,
        { quantity: newQuantity },
        (err, result) => {
          if (err) throw err;
          res.json(result);
        }
      );
    } else {
      const insertProduct = await cartModel.insertMany(req.body);
      res.json({ insertProduct });
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const filtered = { productId: req.body.productId,userId:req.body.userId };
    await cartModel.findOneAndRemove(filtered, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch {
    console.log("error");
  }
};

const decrementProductFromCart = async (req, res) => {
  try {
    const idFiltered = { productId: req.body.productId , userId:req.body.userId};
    const existingProduct = await cartModel.findOne(idFiltered);
    if (existingProduct.quantity === 1) {
      await cartModel.findOneAndRemove(idFiltered, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } else if (existingProduct) {
      const newQuantity = existingProduct.quantity - 1;

      await cartModel.findOneAndUpdate(
        idFiltered,
        { quantity: newQuantity },
        (err, result) => {
          if (err) throw err;
          res.json(result);
        }
      );
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getProductsInCart,
  addProductToCart,
  deleteProductFromCart,
  decrementProductFromCart,
};
