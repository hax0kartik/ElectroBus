const bus = require('./model/bus.js')
const tours = require('./model/tour.js')

class TourManager{
    constructor(){
        this.trendingjson = {}
        this.trending = []
        this.trendingjson.trending = this.trending
        this.buses = []
        this.GetAllBus()
    }

    GetAllBus(){
        bus.find({}, (err, bs) => {
            if(err || !bs){
                console.log("bus not found")
            } else {
                this.buses = bs
            }
        })
    }

    GetTrendingJSON(res, cb){
        this.trending = []
        tours.find({}, (err, tour) => {
            //console.log(tour)
            for (let t = 0; t < tour.length; t++){
                for(let b = 0; b < this.buses.length; b++){
                    //console.log(this.buses[b]._id.toString(), tour[t].busid.toString())
                    if(this.buses[b]._id.toString() === tour[t].busid.toString()){
                        var bus = `{
                            "bus" : {
                                "name" : "${this.buses[b].name}",
                                "type" : "${this.buses[b].type}",
                                "facilities" : {
                                    "wifi" : ${this.buses[b].factilities.wifi},
                                    "water-bottle": ${this.buses[b].factilities.waterbottle},
                                    "lamp": ${this.buses[b].factilities.lamp}
                                }
                            },

                            "tour" : {
                                "departure" : "${tour[t].departure}",
                                "arrival" : "${tour[t].arrival}",
                                "duration" : "08h 20min",
                                "from" : "${tour[t].from}",
                                "to" : "${tour[t].to}",
                                "cost" : ${tour[t].cost},
                                "total-seats" : ${tour[t].totalseats},
                                "single-seats" : ${tour[t].singleseats},
                                "people" : ${tour[t].people},
                                "rating" : ${tour[t].rating},
                                "deal" : ${tour[t].deal},
                                "stops" : ${tour[t].stops},
                                "departure-date": "${tour[t].departuredate}"
                            }
                        }`
                        //console.log(bus)
                        let bus2 = JSON.parse(bus)
                        let seats = []
                        bus2.seats = tour[t].seats
                        console.log("kkk"+bus2)
                        this.trending.push(bus2)
                    }
                }
            }
            this.trendingjson.trending = this.trending
            cb(res, this.trendingjson)
        })
        //console.log(this.trendingjson)
    }
}

module.exports = TourManager