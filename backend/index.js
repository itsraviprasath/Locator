const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const registerRoute = require("./routes/registerRoute")
const loginRoute = require("./routes/loginRoute")



const connectdb = require("./config/db")
dotenv.config()

connectdb


const app = express()


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }))



app.use("/register",registerRoute)
app.use("/login",loginRoute);   


const PORT = process.env.PORT

app.listen(PORT ,()=>{
    console.log("Server Started")
})

