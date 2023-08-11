const express = require("express")
const route = express.Router()
const { getUser,addUser } = require("../controllers/registerController")


route.get("/",getUser)

route.post("/",addUser)


module.exports = route