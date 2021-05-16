var multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage });
module.exports = {
  create: [
    upload.single("image"),
    (req, res) => {
      let data = `/api/uploads/${req.file.originalname}`;
      res.send(data);
    },
  ],
  read: (req, res) => {
    res.sendFile(path.join(__dirname, "../uploads", req.params.img));
  },
};
