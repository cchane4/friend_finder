var path = require('path');

module.exports = function(app){

  app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname,'/../public/survey.html'));
});

//if they arent on a predefined path the default page for the app is the home page
  app.use(function(req, res){
    res.sendFile(path.join(__dirname,'/../public/home.html'));
});

}