var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

// APP CONFIG
mongoose.connect("mongodb://localhost/nauss", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    date: { type: String, default: "TBA" },
    location: String,
    body: Boolean,
    day: {
        type: [String],
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    dayDescription: [String],
});

// LANDING PAGE: redirect to index route
app.get("/", function(req, res) {
    res.redirect("/home");    
});

// ROUTES

// INDEX ROUTE
app.get("/home", function(req, res) {
    res.render("index");    
});

// EVENTS ROUTE
app.get("/events", function(req, res) {
    res.render("events");
});

// ABOUT ROUTE
app.get("/about", function(req, res) {
    res.render("about");
});

// CREATE ROUTE
app.get("/events/form", function(req, res) {
    res.render("form");    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");    
});

    