var express = require('express');
var app = express();


app.use(express.static('../client/build'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.get('*', function(req, res) {
    res.sendFile('../client/build/index.html', {root: __dirname })
});
module.exports = app;