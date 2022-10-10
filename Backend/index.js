const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const userController = require("./Controllers/user.routes");
const { connection } = require("./Config/config");
const jwt=require("jsonwebtoken");


let PORT= process.env.PORT || 8080
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/", userController);


app.listen(PORT, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("Server Started")
});
