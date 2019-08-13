
const path = require('path');

module.exports = (app) => {
// when the users hit this route the server 'serve' the html found on this path
  app.get('/survey', (req, res) => {
	res.sendFile(path.join(__dirname,'/../public/survey.html'));
});

//if they arent on a predefined path the default page for the app is the home page
  app.use( (req, res) => {
    res.sendFile(path.join(__dirname,'/../public/index.html'));
});

}