const router = require("express").Router();
const { upload } = require("../../controllers");

router.post("/", ...upload.create);
router.get("/:img", upload.read);

module.exports = router;
