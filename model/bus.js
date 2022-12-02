const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    
    type : {
        type: String,
        required: true
    },

    factilities : {
        wifi : Boolean,
        waterbottle : Boolean,
        lamp : Boolean
    }
})

let bus = new mongoose.model("bus", schema)

let bus1 = new bus({
    name : "Volt",
    type : "AC Seater",
    factilities : {
        wifi : true,
        waterbottle : true,
        lamp :  true
    }
})

//bus1.save()

module.exports = bus