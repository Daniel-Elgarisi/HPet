const express = require('express');
const bodyParser = require("body-parser");
const users = require("./controller/user.js").router
const pets = require("./controller/pets.js")
const test = require("./controller/user_test.js")
const app = express();
const port = 5000;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use(bodyParser.json());
app.use('/user', users)
app.use('/pets', pets)
app.use('/test', test)
app.listen(port, function () {
    console.log('Server is running..');
});