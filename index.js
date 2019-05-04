var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: true}));
// app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.send ('bdhbcfgcu'); //instead of send use render??
});

app.listen (3000, function(){
	console.log("Peau running");
});

//register page
app.get('/register', function(req, res){
	res.send ('register page'); //instead of send use render??
});