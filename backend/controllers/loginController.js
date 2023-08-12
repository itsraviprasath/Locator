const loginModel = require("../models/loginModel")

const getUser = async(req,res) => {
    try{
        await loginModel.find()
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}


const checkUser = async(req,res) => {
    console.log("I am in login post method")
    const {name,password} = req.body
    const user = await loginModel.findOne({name:name})
    console.log(user)
    if(user){
        
        if(password == user.password){
            console.log("User found")
        }
        else{
            console.log("Incorrect Password")
        }
    }
    else{
        console.log("Incorrect Email")
    }
}



module.exports = {
    getUser,
    checkUser
}