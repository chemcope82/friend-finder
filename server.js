var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
})