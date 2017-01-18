var express = require('express'); 
var path = require('path'); 
var bodyParser = require('body-parser');
////SET UP EXPRESS APP//// 
var app = express();
var PORT = 3000;
//////////SET UP EXPRESS APP FOR PARSING ////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//DATA 
var allFriends = []; 
var surveyResults = []; 
//JSON GET ROUTE//
app.get('/api/friends', function(req,res){ 
	res.json(surveyResults); 
}); 

///API POST ROUTE///
app.post('/api/friends', function(req,res){ 
 var surveyResults = req.body; 
});
//this section is not FINISHED!!!!//

