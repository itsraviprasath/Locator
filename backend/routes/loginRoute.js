const express = require("express")
const route = express.Router()
const { getUser,addUser,checkUser } = require("../controllers/loginController")


route.get("/",getUser)

route.post("/",addUser)

route.patch("/",checkUser)


module.exports = route










































