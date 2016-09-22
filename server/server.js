var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API ROUTES
var apiRouter = require("./routes/routes.js");
app.use("/api", apiRouter);

app.use(express.static('./dist'));

app.use('/', function (req, res){
  res.sendFile(path.resolve('client/index.html'));
})

var port = 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
});