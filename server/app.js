var express = require('express');
var path = require("path")
var app = express();


app.use(express.static('../client/build'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.use('*',  (req, res)=> {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
   });

module.exports = app;