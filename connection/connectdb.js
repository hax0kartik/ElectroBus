let mongoose = require('mongoose') 
let URI = "mongodb+srv://root:root@my-cluster.zbvsw6k.mongodb.net/?retryWrites=true&w=majority"
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