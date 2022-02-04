const favoriteModel = require("../Models/favoriteModel");

const getAllFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    await favoriteModel.find({ userId }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
};

const addFavorite = async (req, res) => {
  try {
    let filteredFavourite = { productId: req.body.productId,userId:req.body.userId };
    await favoriteModel.insertMany(filteredFavourite, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteFavourite = async (req, res) => {
  try {
    let filteredFavourite = { productId: req.body.productId,userId:req.body.userId };

    await favoriteModel.findOneAndRemove(filteredFavourite, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch {
    console.log("error");
  }
};

module.exports = {
  getAllFavorites,
  addFavorite,
  deleteFavourite,
};
