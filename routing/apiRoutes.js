module.exports = function (app){ 
	var friends = require('../app/data/friends.js');
app.get('/api/friends', function(req,res){ 
 	res.json(friends); 
 }); 
// ///API POST ROUTE///
app.post('/api/friends', function(req,res){ 
	console.log(req.body); 
	res.json({}); 
  	// var surveyResults = req.body; 
  	// friends.push(surveyResults);
  	// console.log(friends); 
 });
};

//submit button post using the post method to the friends array 