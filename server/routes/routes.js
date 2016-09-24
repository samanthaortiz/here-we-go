var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');
var api = require('./apiConfig')

// DB ================================================================================ */
// GET USERNAME
router.post('/user-account/', function(req, res) {
  db.knex.select('*')
  .from('users')
  .where({'username': req.query.username})
  .then(function(user) {
    res.send(user);
  })
  .catch(function(error) {
    console.error(error)
  });
});

// router.get('/user-account', function (req, res) {
//   Users.fetch()
//     .then(function(user) {
//       console.log("SUCCESS: ", user);
//       res.send(user);
//     });
// });

// HOTEL SEARCH API ================================================================== */
router.post("/HotelSearch", function(req, res) {
  console.log('>> ENTER /HotelSearch');

  var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('Hotel Response Body', body);
      res.send(body);
    }
  });
});

// FLIGHT SEARCH API ================================================================= */
// router.post("/FlightSearch", function(req, res) {
//   console.log('>> ENTER /FlightSearch');

//   var urlAPI = 'http://terminal2.expedia.com:/x/flights/overview/get'+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });
// });


router.post("/FlightCode", function(req, res) {
  console.log('>> ENTER /FlightCode', req.body);
  // console.log('REQUEST IN FLIGHT CODE', req)
  // console.log('REQUEST/ IN FLIGHT CODE:', req.body)
  var urlAPI = 'https://iatacodes.org/api/v6/autocomplete?query='+req.body.locationForFlightSearch+'&api_key='+api.flightCode;

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('flight code response body', response.body)
      res.send(response.body);
    }
  });
});

module.exports = router;
