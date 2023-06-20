const Jersey = require("../Models/jersey");

const get = async (req, res) => {
  try {
    await Jersey.find({}, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
};

const add = async (req, res) => {
    try {
      await Jersey.insertMany([req.body], (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = {
  get,
  add
};