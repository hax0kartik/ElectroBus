const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    departure : String,
    arrival : String,
    from : String,
    to : String,
    cost : Number,
    totalseats : Number,
    singleseats : Number,
    people : Number,
    rating : Number,
    deal : Boolean,
    stops : Number,
    seats : [{
        booked : Boolean,
        userid : mongoose.ObjectId
    }],
    departuredate : String,
    busid : mongoose.ObjectId
})

let tours = new mongoose.model("tours", schema)


let seats = []
for (let i = 0; i < 30; i++){
    seats.push({booked: false})
}

let tour1 = new tours({
    departure: "12:00",
    arrival: "20:20",
    from : "Delhi",
    to : "Udaipur",
    cost : 5000,
    totalseats : 40,
    singleseats : 40,
    people : 40,
    rating : 4.8,
    deal : true,
    stops : 13,
    busid : new mongoose.Types.ObjectId('6387d8c7e78afbf66baf5883'),
    departuredate : "1 Dec 2022",
    seats : seats
})

//tour1.save()

module.exports = tours