const express = require("express");
const app = express();
const path = require('path');

// Wallet Imports
const walletRoute = require("./Routes_/wallet-routes/wallet");

// User Imports
const authRoute = require("./Routes_/auth-routes/auth");

// Require Configuration For NodeJS
var cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "20mb" }));
app.use(express.static(path.join("./", 'uploads')));

//Define request response in root URL (/)
app.get('/', (req, res) => {
  res.send('App running successfully!');
})

// Wallet Routes
app.use("/wallet", walletRoute);
app.use("/auth", authRoute);

module.exports = app;
