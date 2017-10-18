var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

// APP CONFIG
mongoose.connect("mongodb://localhost/nauss", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// LANDING PAGE: redirect to index route
app.get("/", function(req, res) {
    res.redirect("/home");    
});

// ROUTES

// INDEX ROUTE
app.get("/home", function(req, res) {
    res.render("index");    
});

app.get("/events", function(req, res) {
    res.render("events");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");    
});

    