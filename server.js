//dependencies
var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var path = require('path');

// use any available port if 3000 is not available
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

//requiring the 2 routes and passing in express
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT,function(){
	console.log('listening on PORT: '+ PORT);
});
