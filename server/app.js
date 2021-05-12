const cors = require("cors");
var express = require('express');
var app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}
// for debugging
app.use("",(req,res,next) => {
  next()
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
module.exports = app;