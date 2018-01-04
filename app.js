var bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    express        = require("express"),
    app            = express(),
    mongoose       = require("mongoose");

// APP CONFIG

//mongoose.connect("mongodb://localhost/shrednau", {useMongoClient: true});
mongoose.connect("mongodb://heyitsgilbert:coffee@ds237707.mlab.com:37707/shrednau");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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
    dayDescription: [String],
    month: { type: String, default: null },
    tba: { type: String, default: "off" }
});

var Event = mongoose.model("Event", eventSchema);

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

// CREATE ROUTE
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

// SHOW EDIT/DELETE ROUTE
app.get("/events/form/edit", function(req, res) {
    Event.find({}, function(err, events) {
        if(err){
            console.log(err);
        } else {
            res.render("edit", {events: events});
        }
    });
});

// EDIT ROUTE
app.get("/events/form/edit/:id/editEvent", function(req, res) {
    Event.findById(req.params.id, function(err, foundEvent) {
        if (err) {
            res.redirect("/events/form");
        } else {
            res.render("editEvent", {event: foundEvent});
        }   
    });    
});

// UPDATE ROUTE
app.put("/events/form/edit/:id", function(req, res) {
    // req.body.event.body = req.sanitize(req.body.event.body);
    Event.findByIdAndUpdate(req.params.id, req.body.event, function(err, updatedEvent) {
        if (err) {
            res.redirect("/events/form");
        } else {
            res.redirect("/events");
        }   
    });
});

// DELETE ROUTE
app.delete("/events/form/edit/:id", function(req, res) {
    Event.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/events/form");
        } else {
            res.redirect("/events");
        }
    })    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");    
});

    