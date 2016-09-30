var router = require("express").Router();
var request = require('request');

var api = require('./config/apiConfig')
var All = require('../../client/data/fullAirportList');
var Valid = require('../../client/data/validFlightCodes');

// // FLIGHT SEARCH API ================================================================= */

// let getFlights = {
	module.exports = {
getFlightData: function(req, res, next) {
  console.log('>> ENTER FLIGHT API ROUTER ', req.body);

  var urlAPI =  "http://terminal2.expedia.com:80/x/mflights/search?departureDate="+req.body.startDate+"&returnDate="+req.body.endDate+"&departureAirport="+req.body.departureAirport+"&arrivalAirport="+req.body.destinationAirport+"&prettyPrint=true&numberOfAdultTravelers="+req.body.adults+"&maxOfferCount=20&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767";
  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      req.flightData = body;
  next();
    }
  }); 
},



// AIRPORT CODE SEARCH API ================================================================= */
getFlightCode: function(req, res, next) {
  console.log('>> ENTER FLIGHT CODE API ROUTER ', req.body);
  // console.log('REQUEST IN FLIGHT CODE', req)
  console.log('REQUEST/ IN FLIGHT CODE:', req.body)
  // var urlAPI = 'https://iatacodes.org/api/v6/autocomplete?query='+req.body.locationForFlightSearch+'?user_key='+api.flightCode;

  var urlAPI = 'https://airport.api.aero/airport/match/' + req.body.location + '?user_key=' + api.flightCode;
  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.data.push({ flightCode: JSON.parse(body) });
      next();
    }
  });
}
};
