var express = require('express');
const cors = require("cors");
var path = require("path")
var app = express();
if (process.env.NODE_ENV !== "production") {
    app.use(cors());
    // for debugging
    app.use("", (req, res, next) => {
        next()
    })
}



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'))
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

module.exports = app;