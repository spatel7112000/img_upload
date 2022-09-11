const mongoose = require('mongoose')
const config = async ()=>{
    mongoose.connect('mongodb://localhost:27017/CRUDAPI').then(()=>{
        console.log("Connected")
    }).catch((err)=>{
        console.log("Sorry, Fail Not Connect",err)
    })
}

module.exports = config