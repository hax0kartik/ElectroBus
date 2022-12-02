const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    
    email : {
        type: String,
        required: true
    },

    phone : {
        type : String,
        required: true
    }, 

    message : {
        type : String,
        required: true
    }
})

let contact = new mongoose.model("Contact", schema)

module.exports = contact