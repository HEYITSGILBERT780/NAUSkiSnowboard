var bodyParser = require("body-parser"),
    express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose");

// APP CONFIG

mongoose.connect("mongodb://localhost/shrednau", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MODEL/MONGOOSE CONFIG

var eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true}, 
    date: Date,
    endDate: Date,
    loc: String,
    day: {
        type: [String],
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    dayDescription: [String]
});

var Event = mongoose.model("Event", eventSchema);

Event.create({
    eventName: 'Beets',
    loc: "Mammoth",
    day: ["Monday", "Tuesday", "Friday"]
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
    Event.find({}, function(err, events) {
        if(err){
            console.log(err);
        } else {
            res.render("events", {events: events});
        }
    });
});

// ABOUT ROUTE
app.get("/about", function(req, res) {
    res.render("about");
});

// NEW FORM ROUTE
app.get("/events/form", function(req, res) {
    res.render("form");    
});

app.post("/events", function(req, res) {
    // create event
    console.log("===========");
    console.log(req.body);
    console.log("===========");
    Event.create(req.body.event, function(err, newEvent) {
        if(err) {
            res.render("form");
            console.log(err);
        } else {
            console.log(req.body.event);
            console.log("===========");
            res.redirect("/events");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");    
});

    