const express = require('express');
const bodyParser = require("body-parser");
const users = require("./controller/user.js").router
const pets = require("./controller/pets.js")
const reports = require("./controller/reports.js")
const appointments = require("./controller/appointments.js")
const vaccines = require("./controller/vaccines.js")
const photoalbum = require("./controller/photo_album.js")
const { urlencoded } = require('express');
const { report } = require('./controller/appointments.js');

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
app.use('/reports',reports)
app.use('/appointments', appointments)
app.use('/vaccines', vaccines)
app.use('/photo', photoalbum)

app.listen(port, function () {
    console.log('Server is running..');
});
