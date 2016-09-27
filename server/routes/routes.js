var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');
<<<<<<< 29e77ff9ae7366e00b9ed451537990f20b226cb6
<<<<<<< adf17ae5c0a1c043f6f172c4dd68d836906f1195
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< f6f7a38780bb45dce246e451978335ff47ad2342
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
=======
>>>>>>> fix(fixed dashboard/account view):
=======
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
>>>>>>> feat(): API request for airport codes receiving data
=======
<<<<<<< 535f92954c672a39e7b6a0422981653e3e6a8b26
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
=======
>>>>>>> fix(fixed dashboard/account view):
>>>>>>> fix(fixed dashboard/account view):
=======
>>>>>>> chore(router): router cleanup
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

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google/');
}

<<<<<<< HEAD
<<<<<<< 29e77ff9ae7366e00b9ed451537990f20b226cb6
<<<<<<< adf17ae5c0a1c043f6f172c4dd68d836906f1195
<<<<<<< f6f7a38780bb45dce246e451978335ff47ad2342
=======
<<<<<<< 535f92954c672a39e7b6a0422981653e3e6a8b26
>>>>>>> fix(fixed dashboard/account view):

=======
var api = require('./apiConfig')
>>>>>>> feat(): API request for airport codes receiving data

=======
>>>>>>> fix(fixed dashboard/account view):
=======
>>>>>>> chore(router): router cleanup
=======
>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
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
<<<<<<< HEAD
// router.post("/FlightSearch", function(req, res) {
//   console.log('>> ENTER /FlightSearch');
<<<<<<< HEAD
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
=======
>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
=======
router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER /FlightSearch');
>>>>>>> feature

  var urlAPI = 'http://terminal2.expedia.com:/x/flights/overview/get'+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

<<<<<<< HEAD
//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });
// });
<<<<<<< HEAD
=======
  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});
>>>>>>> feature


=======

//   var urlAPI = 'http://terminal2.expedia.com:/x/flights/overview/get'+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });
// });


>>>>>>> feat(): API request for airport codes receiving data
=======


>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
router.post("/FlightCode", function(req, res) {
  console.log('>> ENTER /FlightCode', req.body);
  // console.log('REQUEST IN FLIGHT CODE', req)
  // console.log('REQUEST/ IN FLIGHT CODE:', req.body)
  var urlAPI = 'https://iatacodes.org/api/v6/autocomplete?query='+req.body.locationForFlightSearch+'&api_key='+api.flightCode;

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
<<<<<<< HEAD
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
      console.log("FLIGHT BODY", body)
      res.send(body);
=======
      console.log('flight code response body', response.body)
      res.send(response.body);
>>>>>>> feat(): API request for airport codes receiving data
=======
      console.log('flight code response body', response.body)
      res.send(response.body);
>>>>>>> feat(): API request for airport codes receiving data
=======
      console.log('flight code response body', response.body)
      res.send(response.body);
>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
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


router.get('/airport-list/', function(req, res){

    var all = [];
    All.forEach(function(airport){
      if(Valid.indexOf(airport.code) !== -1){
        all.push(airport);
      }
    })


    var selectableAirports = all.map(function(airport, i){
      return airport.name
    });

    console.log(selectableAirports);



  res.send(selectableAirports)
});

module.exports = router;
