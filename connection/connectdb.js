let mongoose = require('mongoose') 
let URI = process.env.DB_CONNECTION_STRING
let connectdb = () => {
    try{
        let con = mongoose.connect(URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        })
        console.log("Connected to the db")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb