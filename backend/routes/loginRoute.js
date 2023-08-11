const express = require("express")
const route = express.Router()
const { getUser,checkUser } = require("../controllers/loginController")


route.get("/",getUser)

route.post("/",checkUser)



module.exports = route

  








































