const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());

const db = require("./DB");
const menRouter = require("./Routers/menRouter");
const womenRouter = require("./Routers/womenRouter");
const kidsRouter = require("./Routers/kidsRouter");
const cartRouter = require("./Routers/cart");
const userRouter = require("./Routers/user");
const favoriteRouter = require("./Routers/favorite");
const accessoriesRouter = require("./Routers/accessorie");
const shirtsRouter = require("./Routers/shirt");
const productRouter = require('./Routers/product');
const playerRouter = require('./Routers/player');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/mens", menRouter);
app.use("/womens", womenRouter);
app.use("/kids", kidsRouter);
app.use("/cart", cartRouter);
app.use("/users", userRouter);
app.use("/favorites", favoriteRouter);
app.use("/accessories", accessoriesRouter);
app.use("/shirts", shirtsRouter);
app.use('/products',productRouter);
app.use('/players',playerRouter);

app.get("/", (req, res) => {
  res.send("Api Running!");
});


app.listen(PORT, () => {
  console.log(`listen to port ${PORT}!`);
});
