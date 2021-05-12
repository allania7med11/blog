const router = require('express').Router();
const { section } = require("../../controllers");

router.post("/", section.create);
router.get("/:id?", section.read);
router.patch("/:id", section.update);
router.delete("/:id", section.delete);


module.exports = router;
