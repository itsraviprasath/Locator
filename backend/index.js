const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors")



const loginRoute = require("./routes/loginRoute")
const registerRoute = require("./routes/registerRoute")



const connectdb = require("./config/db")
// const exp = require("constants")
dotenv.config()


//db connection
connectdb

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/login", loginRoute)
app.use("/register", registerRoute)


const PORT = process.env.PORT


app.listen(3000, () => {
    console.log("Server Started")
})


console.log(PORT)

