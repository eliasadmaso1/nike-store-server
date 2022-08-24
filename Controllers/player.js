const Player = require("../Models/player");

const getAllPlayers = async (req, res) => {
  try {
    const Players = await Player.find();
    res.status(200).json(Players);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addPlayer = async (req, res) => {
  try {
    await Player.insertMany([req.body], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllPlayers, addPlayer };