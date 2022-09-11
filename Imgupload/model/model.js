const mongoose = require('mongoose')

const CRUD_Schema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    },
    Mobile: {
        type: String
    },
    City: {
        type: String
    }
})

const CRUD_Model = mongoose.model('crud_api', CRUD_Schema)
module.exports = CRUD_Model