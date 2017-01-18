//DEPENDENCIES//
var express = require('express'); 
var bodyParser  = require('body-parser'); 
var path = require('path'); 
var fs = require ('fs'); //???NOT SURE IF YOU NEED THIS ////
///SETTING UP EXPRESS //
var app = express(); 
var PORT = 3000; 
//SET UP EXPRESS FOR PARSING//
app.use(bodyParser.json()); 
app.use(bodyParserbody.urlencoded({extended:true}));
app.use(bodyParser.text()); 
app.use (bodyParser.json({ type:'application/vnd.api+json'}));
//SERVER LISTENING FOR REQUESTS///
app.listen(3000);
// CHECK TO SEE IF THIS WORKS ^^^^^^