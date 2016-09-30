var router = require("express").Router();
var request = require('request');

router.post('/carRentalSearch', function(req, res) {
  console.log('>> ENTER CAR RENTAL API ROUTER ', req.body);
  res.data.push({ flightCode: JSON.parse(body) });
  next();
});