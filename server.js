//DEPENDENCIES//
var express = require('express');
var bodyParser  = require('body-parser');
var path = require('path');

///SETTING UP EXPRESS //
var app = express();
var PORT = process.env.PORT || 3000;
//SET UP EXPRESS FOR PARSING//
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.raw ({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html'}))


app.listen(PORT,function(){
	console.log('listening on PORT: '+ PORT);
});
