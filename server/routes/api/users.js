const router = require('express').Router();
const { user } = require("../../controllers");

router.post("/", user.create);



module.exports = router;