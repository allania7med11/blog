var express = require('express');
var app = express();


app.use(express.static('../client/build'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
module.exports = app;