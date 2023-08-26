const router = require("express").Router();
const registeruser = require("../controllers/registerController");

router.post("/", registeruser);

module.exports = router
