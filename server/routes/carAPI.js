var router = require("express").Router();
var request = require('request');

function getCarData(req, res, next) {
  console.log('>> ENTER CAR RENTAL API ROUTER ', req.body);

  var urlAPI = `http://terminal2.expedia.com:80/x/cars/search?pickupdate=${req.body.startDate}&dropoffdate=${req.body.endDate}&pickuplocation=JFK&dropofflocation=JFK&limit=10&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767`;

  request({ url: urlAPI }, function(error, response, body) {
    // console.log("response is", response)
    if (!error && response.statusCode == 200) {
      res.data.push({ carData: JSON.parse(body) });
      next();
    }
  });
};

module.exports = getCarData;
