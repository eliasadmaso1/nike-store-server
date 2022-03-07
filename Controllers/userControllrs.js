const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

async function getUsers(req, res) {
  try {
    await userModel.find({}, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
}

const registerUser = async (req, res) => {
  try {
    const { email} = req.body;
    await userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        res
          .status(500)
          .json({ message: { msgBody: "Error has occured", msgError: true } });
      }
      if (user) {
        res.status(400).json({
          message: { msgBody: "User Email already taken", msgError: true },
        });
      }
      bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          if (err) throw err;
          req.body.password = hash;

          const newUser = new userModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            userName:req.body.userName,
            email: req.body.email,
            password: req.body.password,
          });
          try {
            await newUser.save();
            res.status(201).json({
              success: true,
              message: "add new user",
              data: newUser,
            });
          } catch (err) {
            res.status(400).json({
              success: false,
              message: "failed creating user",
              error: err.message,
            });
          }
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "email not found",
        errors: { email: "email not found" },
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "wrong password",
        errors: { password: "wrong password" },
      });
    }
    const token = jwt.sign(user.toJSON(), "eliasadmaso", { expiresIn: "100d" });
    res.status(200).json({
      success: true,
      message: "success",
      data: token,
    });
  } catch (err) {
    res.status(500).json({
      message: "something went wrong",
      error: err.message,
    });
  }
}

module.exports = { getUsers, registerUser, loginUser };
