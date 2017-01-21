
module.exports = function(app){ 
//routing to page where the survey exists// 
var path = require('path');
var express = require('express'); 
app.get('/survey', function(req,res){
	res.sendFile(path.join(__dirname,'app/public/survey.html')); 
});
//default route that leads to home.html

}; // module. exports is needed to use files in another 