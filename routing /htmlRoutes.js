//SET UP EXPRESS DEPENDENCY AND EXPRESS APP SETUP//
var express = require('express'); 
var app = express();
var PORT = 3000;  

//routing to page where the survey exists// 
app.get('/survey', function(req,res){
	res.sendFile(path.join(__dirname,'/app/public/survey.html')); 
});
//default route that leads to home.html 
app.use('/', express.static(path.join(__dirname,'/app/public/home.html')));
//server listens for requests at port 3000 
app.listen(3000); 