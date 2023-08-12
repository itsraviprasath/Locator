const userModel = require("../models/userModel")

const getData = async(req,res) => {
    await userModel.find()
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
}

const getTheUser = async(req,res) => {
    const id = req.params.id
    try{
        console.log(id)
        const user = await userModel.findOne({_id:id})
        .then(res =>{
            console.log("Successful")
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}

const checkData = async(req,res) => {
    const {name,password} = req.body
    // console.log("hello",name,password)
    try {
        const user = await userModel.findOne({name:name})
       
        if(user){
            if(password == user.password){
                console.log("User found")
                res.json("User found")
            }
            else{
                console.log("Incorrect password")
                res.json("Incorrect password")
            }
        }
        else{
            console.log("Incorrect email")
            res.json("Incorrect email")
        }
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    getData,
    getTheUser,
    checkData
}