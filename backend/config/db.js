const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

module.exports = mongoose.connect(process.env.mongoDB,{useNewUrlParser:true})
.then(res => {
    console.log("Successfully created")
})
.catch(err => {
    console.log(err)
})