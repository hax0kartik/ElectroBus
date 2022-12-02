let Express = require('express')
let path = require('path')
let hbs = require('hbs')
let connectdb = require('./connection/connectdb.js')
const user = require('./model/user.js')
const contact = require('./model/contact-us.js')
const bus = require('./model/bus.js')
const tour = require('./model/tour.js')

/* get JSONs */
let explorejson = require('./public/jsons/explore.json')
//let trendingjson = require('./public/jsons/trending.json')
const TourManager = require('./tourmanager.js')

connectdb()

//add('kartik@gmail.com', 'root')

let app = new Express()
let tourmanager = new TourManager()

app.use(Express.static(__dirname + '/public'))
app.use(Express.urlencoded({ extended: true}))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "templates/views"))
hbs.registerPartials(path.join(__dirname, "templates/partials"))

let htmlfolder = path.join(__dirname, "html")


app.get("/", (req, res) => {
    //res.sendFile(path.join(htmlfolder, "landing.html"))
    res.render("landing", {landing : true})
})

app.get("/explore", (req, res) => {
    //res.sendFile(path.join(htmlfolder, "explore.html"))
    /* used to concat two json objects */
    Object.assign(explorejson, {landing: true})
    res.render("explore", explorejson)
})

app.get("/laundry", (req, res) => {
    //res.sendFile(path.join(htmlfolder, "laundry.html"))
    res.render("laundry", {laundry: true})
})

app.get("/contact-us", (req, res) => {
    //res.sendFile(path.join(htmlfolder, "contact-us.html"))
    res.render("contact-us", {contactus: true})
})

app.post("/contact-us", (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let message = req.body.message

    let contactent = new contact({
        name: name,
        email : email,
        phone : phone,
        message : message
    })

    contactent.save()
    res.render("contact-us", {contactus: true, snackbar: true, message: "Your response has been recorded!"})
})

app.get("/Login", (req, res) => {
    //res.sendFile(path.join(htmlfolder, "Login.html"))
    res.render("Login", {login: true, islogin: true})
})

app.get("/signup", (req, res) => {
    res.render("Login", {login: true})
})

app.post("/signup", (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let pass = req.body.pass

    let ent = new user({
        name : name,
        email : email,
        password : pass
    })

    console.log(name, email, pass)

    user.findOne({email : email}, function(err, user){
        if(user){
            res.render("Login", {login: true, snackbar: true, message: "User Already Exists!"})
        } else{
            res.render("Login", {login : true, snackbar: {valid : true}, message: "New account created!"})
            ent.save()
        }
    })
})

app.post("/Login", (req, res) => {
    var username = req.body.username
    var pass = req.body.password

    user.findOne({email : username, password : pass}, function(err, user){
        if(err){
            console.log(err)
        }

        if(!user) {
            console.log(username, pass, "Not found")
            res.render("Login", {login: true, islogin: true, snackbar: true, message: "Wrong username or password!"})
        } else {
            console.log("Found user", user._id.toString())
            //res.status(200).send()
            res.render("Login", {login : true, islogin: true, snackbar: {valid : true}, message: "Login succesful!"})
        }
    })
})

app.get("/search", (req, res) => {
    //res.sendFile(path.join(htmlfolder, "search.html"))
    tourmanager.GetTrendingJSON(res, (res, trending) => {
        Object.assign(trending, {landing : true, message: "Booking confirmed!"})
        res.render("search", trending)
    })
})

app.get("/tour.json", (req, res) => {
    tourmanager.GetTrendingJSON(res, (res, trending) => {
        res.setHeader('content-type', 'application/json')
        res.send(trending)
    })
})

app.get("*", (req, res) => {
    res.render("landing", {landing : true, snackbar:true, message: "Oops.. URL was not found!"})
})

app.listen("80", () => {
    console.log("Server is running")
})