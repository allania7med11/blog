const router = require("express").Router();

router.use("/sections", require("./sections"));
module.exports = router;
