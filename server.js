//dependencies
const express = require('express');
const bodyParser  = require('body-parser');
const path = require('path');
const app = express();
// use any available port if 3000 is not available
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(express.static(path.join(__dirname + '/app/public')));

//app.use(bodyParser.text({ type: 'text/html' }))


//requiring the 2 routes and passing in express
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT,() => {
	console.log('listening on PORT: '+ PORT);
});
