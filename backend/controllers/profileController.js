const profileModel = require("../models/loginModel")

const getProfile = async(req,res) => {
    try{
        await profileModel.find()
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        });
    }
    catch(err){
        console.log(err)
    }
}

const postProfile = async(req,res) => {
    const {name,password} = req.body
    const user = await loginModel.findOne({name:name})
    console.log(user)
}