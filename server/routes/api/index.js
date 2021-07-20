const router = require("express").Router();

router.use("/sections", require("./sections"));
router.use("/uploads", require("./uploads"));
router.use("/users", require("./users"));
module.exports = router;
