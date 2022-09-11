const APIModel = require('../model/model')
const mongoose = require('mongoose')


//<----------- get File ----------->//

exports.get = async (req, res)=>{
    let data = await APIModel.find()
    res.send(data)
    console.log(data)
}

//<----------- post File ----------->//

exports.post = async(req, res)=>{
    let data = new APIModel(req.body)
    let result = await data.save();
    console.log(result)
    res.send(result)
}

//<----------- search File ----------->//

exports.get = async (req, res)=>{
    console.log(req.params.key)
    let data = await APIModel.find({
        $or: [
            {FirstName: {$regex: req.params.key}},
            {LastName: {$regex: req.params.key}},
            {Email: {$regex: req.params.key}},
            {Mobile: {$regex: req.params.key}},
            {City: {$regex: req.params.key}},
        ]
    })
    res.send(data)
    console.log(data)
}

//<----------- put File ----------->//

exports.put = async (req, res)=>{
    let data = await APIModel.updateOne(req.params,{$set: req.body})
    res.send(data)
    console.log(data)
}


//<----------- delete File ----------->//

exports.delete = async (req, res)=>{
    let data = await APIModel.deleteOne(req.params)
    res.send(data)
    console.log(data)
}

