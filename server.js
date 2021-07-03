var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/src/pages/index.hbs');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Hello World');
  console.log('Your app is listening on port ' + listener.address().port);
});
