var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');
var Users = require('../database/models/User')
var api = require('./apiConfig')
var All = require('../../client/data/fullAirportList');
var Valid = require('../../client/data/validFlightCodes');

//PASSPORT GOOGLE AUTHENTICATION
var passport = require('passport');


router.get('/auth/google',
  passport.authenticate('google', { scope: ['openid email profile'] }));


router.get('/auth/google/callback',
    passport.authenticate('google', { 
      successRedirect: '/dashboard',
      failureRedirect: '/auth/google/failure'
    }),
    function(req, res) {
        res.redirect('http://localhost:4000/dashboard');
    } );

router.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    //add msql connection 
    user: req.user
  });
}); 

// router.get('/logout', function(req, res) {
//   req.logOut();
//   res.redirect('/');
// });
  var url = require('url');

router.get('/logout', function (req, res, next){
  req.logout();
  res.redirect('https://accounts.google.com/logout')
});

// router.get('/logout', function(req, res) {
//     res.redirect('/');
// });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google/');
}

// DB ================================================================================ */
// GET USERNAME
router.post('/user-account/', function(req, res) {
  db.knex.select('*')
  .from('users')
  .where({'google_id': req.query.google_id})
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

router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER /FlightSearch');

  var urlAPI = 'http://terminal2.expedia.com:/x/flights/overview/get'+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';
//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });
// });

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});


router.post("/FlightCode", function(req, res) {
  console.log('>> ENTER /FlightCode', req.body);
  // console.log('REQUEST IN FLIGHT CODE', req)
  // console.log('REQUEST/ IN FLIGHT CODE:', req.body)
  var urlAPI = 'https://iatacodes.org/api/v6/autocomplete?query='+req.body.locationForFlightSearch+'&api_key='+api.flightCode;

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    }
  });
});

router.post('/hotel-resp/', function(req, res) {
  console.log("REQBODY", req.body)
  db.knex.insert({'dummyInfo': JSON.stringify(req.body.result.hotel)})
  .into('dummyHotel')
  .then(function(info) {
    console.log("DUMMYINFO", info)
    res.send(info);
  })
  .catch(function(error) {
    console.error(error)
  });
});


// router.get('/airport-list/', function(req, res){
//     var all = [];
//     All.forEach(function(airport){
//       if(Valid.indexOf(airport.code) !== -1){
//         all.push(airport);
//       }
//     })
//     var selectableAirports = all.map(function(airport, i){
//       return airport.name
//     });
//     console.log(selectableAirports);
//   res.send(selectableAirports)
// });

module.exports = router;
