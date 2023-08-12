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


const postData = async(req,res) => {
    const {name,password} = req.body
    try {
        const newUser = new userModel({
            name:name,
            password:password
        })

        await newUser.save()
        .then(res => {
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


module.exports = {
    getData,
    postData
}