const express = require('express');
const path = require('path');
const routes = require('../routes');
const server = express();
server.use(express.json());

// Require Configuration For NodeJS
var cors = require("cors");
server.use(cors());
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
});
server.use(express.json());
server.use(express.urlencoded({ extended: false, limit: "20mb" }));
server.use(express.static(path.join("./", 'uploads')));
server.use("/uploads", express.static(path.resolve(__dirname + '/uploads')));

//Define request response in root URL (/)
server.get('/', (req, res) => {
    res.send('App running successfully!');
})

//Post Route
server.use('/post', routes);

module.exports = server;