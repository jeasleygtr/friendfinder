// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Configures express and the port
var app = express();
var PORT = process.env.PORT || 3000;


// This makes it easier for our server to interpret data sent to it by using bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(__dirname + '/app/public'));


// Directs our server to the routing files

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Listener

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});