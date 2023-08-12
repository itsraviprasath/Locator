const express = require("express")
const route = express.Router()
const {getData,postData} = require("../controllers/registerController")

route.get("/",getData)

route.post("/",postData)

module.exports=route;   