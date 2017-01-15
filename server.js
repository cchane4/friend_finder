//DEPENDENCIES//
var express = require('express'); 
var bodyParser  = require('body-parser'); 
var path = require('path'); 
var fs = require ('fs'); 
///SETTING UP EXPRESS //
var app = express(); 
var PORT = 3000; 
//SET UP EXPRESS FOR PARSING//
app.use(bodyParser.json()); 
app.use(bodyParserbody.urlencoded({extended:true}));
app.use(bodyParser.text()); 
app.use (bodyParser.json({ type:'application/vnd.api+json'}));
