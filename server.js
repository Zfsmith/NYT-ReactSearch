var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var Document = require("./models/articals");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/articals");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {

    // This GET request will search for the latest clickCount
    Document.find({}).exec(function(err, doc) {

        if (err) {
            console.log(err);
        }
        else {
            res.send(doc);
        }
    });
});

app.post("/api", function(req, res){
    var artical = req.body.term;

    Artical.save({
        artical: artical
    });
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});