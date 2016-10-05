var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');
var Users = require('../database/models/User')
var All = require('../../client/data/fullAirportList');
var Valid = require('../../client/data/validFlightCodes');
let hotelRoute = require('./hotelApi')
let flightRoute = require('./flightApi')
let carRoute = require('./carApi')
let activityRoute = require('./activityApi')
var siftInfo = require('../server');
var siftConfig = require('./config/siftConfig');



//PASSPORT GOOGLE AUTHENTICATION
var passport = require('passport');

router.get('/auth/google',
  passport.authenticate('google', { scope: ['openid email profile'], accessType: 'offline'  }));

router.get('/auth/google/callback',
  passport.authenticate('google', { 
    successRedirect: '/siftAuth',
    failureRedirect: '/auth/google/failure'
  })
);

router.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    //add msql connection 
    user: req.user
  });
}); 

var url = require('url');

router.get('/logout', function (req, res, next){
  req.logout();
  res.redirect('https://accounts.google.com/logout')
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google/');
}

// DB ================================================================================ */
router.post('/budgetData', function(req, res) {
  console.log('>>>>> SAVING BUDGET TO DATABASE: ', req.body);
  // RAW SQL: INSERT INTO budgets (budgets.type_id, budgets.budget) VALUES 
  //((SELECT types.id FROM types WHERE types.reservationType = 'hotel'), 100)

  var subSQL;
  var data = req.body;

  for(var key in data) {
    if(data.hasOwnProperty(key)) {
      subSQL = db.knex('types').where('reservationType', key).select('id');
      db.knex('budgets').insert({budget: data[key], type_id: subSQL})
      .then(function(user) {
        // console.log('INSERTED')
      })
      .catch(function(error) {
        console.error(error)
      });
    };
  };

  res.send();
});

router.post('/hotelItin', function(req, res) {
<<<<<<< HEAD
  var firstEmail = req.body.email.split("=")[1];
  var email = firstEmail.split("#")[0]

    db.knex('hotelReservations').where('hotelReservations.user_email', email).select("*")
    .then(function(info) {
      // console.log('GOT INFO', info)
      res.send(info);
    })
    .catch(function(error) {
      console.error(error)
    });
=======
  console.log('this is the req body: ', req.body);
  /*

    RAW SQL: INSERT INTO hotelReservations (hotelReservations.status_id, hotelReservations.type_id, hotelReservations.providerName, hotelReservations.address, hotelReservations.startDate, hotelReservations.endDate, hotelReservations.organization) VALUES ();

  */

  // var subSQL;
  // var email = req.body.email;
  // // var info;
  //   db.knex('hotelReservations').where('hotelReservations.user_email', email).select("*")
  //   .then(function(info) {
  //     // info = data
  //     console.log('GOT INFO', info)
  //     res.send(info);
  //   })
  //   .catch(function(error) {
  //     console.error(error)
  //   });
>>>>>>> codeCleanup
});

router.post('/flightItin', function(req, res) {
  var firstEmail = req.body.email.split("=")[1];
  var email = firstEmail.split("#")[0]

  console.log('>>>>> GETTING FLIGHT ITIN FROM DATABASE: ', req.body);

<<<<<<< HEAD
    db.knex('flightReservations').where('flightReservations.user_email', email).select("*")
    .then(function(info) {
      console.log('GOT FLIGHT INFO', info)
      res.send(info);
    })
    .catch(function(error) {
      console.error(error)
    });
=======
router.post('/carItin', function(req, res) {
  console.log('>>>>> SAVING CAR ITIN TO DATABASE: ', req.body);
>>>>>>> codeCleanup
});

router.post('/carItin', function(req, res) {
  var firstEmail = req.body.email.split("=")[1];
  var email = firstEmail.split("#")[0]
  console.log('>>>>> GETTING CARRENTALS ITIN FROM DATABASE: ', req.body);

    db.knex('carRentals').where('carRentals.user_email', email).select("*")
    .then(function(info) {
      console.log('GOT INFO', info)
      res.send(info);
    })
    .catch(function(error) {
      console.error(error)
    });
});


// router.post('/activityItin', function(req, res) {
//   // console.log('>>>>> SAVING ACTIVITIES ITIN TO DATABASE: ', req.body);
//   // RAW SQL: SELECT * FROM activites VALUES WHERE hotel.user_email = email), 100)
//   console.log('this is the req body',req.body)
//   var email = req.body.email;
//   // var info;
//     db.knex('carRentals').where('activities.user_email', email).select("*")
//     .then(function(info) {
//       console.log('GOT INFO', info)
//       res.send(info);
//     })
//     .catch(function(error) {
//       console.error(error)
//     });
// });

// TRIP/FLIGHT SEARCH API =====================================================================

router.post("/FlightSearch", function(req, res) {
  // console.log('>> ENTER FLIGHT API ROUTER ', req.body);
  
  var urlAPI =  "http://terminal2.expedia.com:80/x/mflights/search?departureDate="+req.body.startDate+"&returnDate="+req.body.endDate+"&departureAirport="+req.body.departureAirport+"&arrivalAirport="+req.body.destinationAirport+"&prettyPrint=true&numberOfAdultTravelers="+req.body.adults+"&maxOfferCount=20&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767"

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('flight request from expedia response', response.body);
      res.send(body);
    } else {
      console.error(error)
    }
  });
});

router.post('/trips', hotelRoute, carRoute, activityRoute, flightRoute.getFlightCode, function(req, res, next) {
  res.send(res.data);
});

module.exports = router;