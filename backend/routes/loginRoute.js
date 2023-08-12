const express = require("express")
const route = express.Router()
const {getData,getTheUser,checkData} = require("../controllers/loginController")

route.get("/",getData)

route.get("/:id",getTheUser)

route.post("/",checkData)

module.exports = route