const router = require("express").Router();
const authUser = require("../controllers/loginController");

router.post('/',authUser);

module.exports = router
