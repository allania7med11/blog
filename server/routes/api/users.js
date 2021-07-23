const router = require('express').Router();
const { user } = require("../../controllers");


router.post("/", user.create);
router.post("/login", user.login);
router.get("/current", user.current);
router.delete("/logout", user.logout);



module.exports = router;