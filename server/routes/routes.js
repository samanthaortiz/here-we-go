var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');
var Users = require('../database/models/User')
var All = require('../../client/data/fullAirportList');
var Valid = require('../../client/data/validFlightCodes');
var hotelRoute = require('./hotelAPI')
var flightRoute = require('./flightAPI')
var carRoute = require('./carAPI')
var activityRoute = require('./activityAPI')
var siftInfo = require('../server');
var siftConfig = require('./config/siftConfig');
var dbRouter = require('../dbRouter');



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

router.post('/trips', hotelRoute, carRoute, activityRoute, flightRoute.getFlightCode, function(req, res, next) {
  res.send(res.data);
});

// DB ================================================================================ */
router.post('/budgetData', dbRouter.budgetData, function(req, res, next) {
  console.log('>>>>> SAVING BUDGET TO DATABASE: ', req.body);
  res.send();
});

router.post('/hotelItin', dbRouter.hotelItin, function(req, res, next) {
  res.send(res.data);
});

router.post('/flightItin', dbRouter.flightItin, function(req, res, next) {
  res.send(res.data);
});

router.post('/carItin', dbRouter.carItin, function(req, res, next) {
  res.send(res.data);
});

router.post('/activityItin', dbRouter.activityItin, function(req, res, next) {
  res.send(res.data);
});

router.post('/changeStatus', dbRouter.changeStatus, function(req, res, next){
  // console.log('response in change status:', res)
  res.sendStatus(200);
})

router.post('/newTrip', dbRouter.newTrip, function(req, res, next){
  // console.log('response in add trip:', res.data)
  res.send(res.data);
})

router.post('/getAllTrips', dbRouter.getAllTrips, function(req, res, next){
  // console.log('response in get all trips:', res.data)
  res.send(res.data);
})

//get all trip info api
router.post('/getAllTripInfo', dbRouter.getAllTripInfo, function(req, res, next){
  // console.log("RES DATS FROM ALL TRIP INFO", res.data)
  res.send(res.data);
})

router.post('/updateTripId', dbRouter.updateTripId, function(req, res, next){
  // console.log('response in change status:', res)
  res.sendStatus(200);
})

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

module.exports = router;
