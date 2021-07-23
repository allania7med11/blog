var express = require('express');
const cors = require("cors");

var path = require("path")
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth
const passport = require("./middlewares/auth.js");
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// auth end

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