const router = require("express").Router();

router.use("/sections", require("./sections"));
router.use("/uploads", require("./uploads"));
module.exports = router;
