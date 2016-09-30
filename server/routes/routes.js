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
    successRedirect: "https://api.easilydo.com/v1/connect_email?api_key=" + siftConfig.sift.API_KEY + "&username=eroussopoulos@gmail.com" + "&token=5065399dc833fabebfa3fd5d978b3c25&redirect_url=http://localhost:4000/"

    //siftInfo.siftInfo.connectToken
    // failureRedirect: '/auth/google/failure'
  }),
  function(req, res) {
    console.log('RESPONSE GOING TO SPLASH PAGE');
    res.redirect('/');
  }
);

// router.get('/auth/google/callback', function(req, res) {
//   // passport.authenticate('google', { 
//     res.redirect(";
//     console.log('>>>> REDIRECTED <<<<')
//   // }
// });

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



// TRIP/FLIGHT SEARCH API =====================================================================
<<<<<<< c7b0a226cc5b362728a14fb6d97b0408e5a49da8
<<<<<<< e00148aba0ac05361fcef413c34f4e2e2db0b0ed
<<<<<<< 44fd74dd95effc4bb84e12e506b9b91414952a10
<<<<<<< 1bfee55d6674a8b415391c1ed50115215053d710
<<<<<<< c19f20061e6e3943db0395e1b9036337db9a7429
<<<<<<< d520e4c67170cc9b02b8b2bc861a254dc85c42b3
<<<<<<< 15cb286807499e04e92fa052f7988f2f6112667d
<<<<<<< a9e773abfb091f3255a4b16046c3d9331ba6a0c4
<<<<<<< 37efff517931d54b69c0dc129626fe278938d9bc
<<<<<<< 186196ab4e5524e5d5c8aefb7aba7232840ed0c3
<<<<<<< 5ab0a05e606c7d01b2a1c99b09d9be84fd7796d3
<<<<<<< 35185295f44cb696c95783e95829eb359a7c402b
<<<<<<< 3e4ff4bb01dc2963e17f8ce4ba2c63ff14698577
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
>>>>>>> chore(Styles): added css to autocomplete input field
router.post("/FlightSearch", function(req, res) {
  // console.log('>> ENTER FLIGHT API ROUTER ', req.body);
  
=======
=======

>>>>>>> fix code
=======
=======
=======
<<<<<<< bdd2aceaf1969d5a35746d8d638d9b015d6e0e7c
>>>>>>> fix code
<<<<<<< b1848dc86c4700f0c2750862fdcd197beb2d0e4d
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< a9e773abfb091f3255a4b16046c3d9331ba6a0c4
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======

>>>>>>> fix code
>>>>>>> fix code
=======

>>>>>>> Fix merge conflicts
router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER FLIGHT API ROUTER ', req.body);
=======
=======
=======
=======
=======
=======
<<<<<<< 82d1fb6fef08b3c9faea53bf554014ca25529310
>>>>>>> fix code
<<<<<<< 38a146ff35915b9742ddbef836c64ddabdcf9651
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 41bdead0806d5f1f19690752b2c7ee94bf634b43
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 8765c8231c730498061a6a985f3f20348e9b5e1b
>>>>>>> fix code
<<<<<<< 6b2ea6eff216e301ea1c168b4687bfc3533cbc90
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< f2069aa4b70c4ce99fe0736eccc90e1035eeeb77
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
>>>>>>> chore(Styles): added css to autocomplete input field
router.post("/FlightSearch", function(req, res) {
  // console.log('>> ENTER FLIGHT API ROUTER ', req.body);
=======
=======

>>>>>>> fix code
=======
=======
=======
<<<<<<< bdd2aceaf1969d5a35746d8d638d9b015d6e0e7c
>>>>>>> fix code
<<<<<<< b1848dc86c4700f0c2750862fdcd197beb2d0e4d
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 82d1fb6fef08b3c9faea53bf554014ca25529310
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======

>>>>>>> fix code
>>>>>>> fix code
router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER FLIGHT API ROUTER ', req.body);
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field

>>>>>>> chore(Styles): added css to autocomplete input field
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


// // HOTEL SEARCH API ================================================================== */
// router.post("/HotelSearch", function(req, res) {
//   console.log('>> ENTER HOTEL API ROUTER ', req.body);

//   var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // console.log('Hotel Response Body', body);
//       res.send(body);
//     }
//   });
// });

// // FLIGHT SEARCH API ================================================================= */

// router.post("/FlightSearch", function(req, res) {
//   console.log('>> ENTER FLIGHT API ROUTER ', req.body);

//   var urlAPI =  "http://terminal2.expedia.com:80/x/mflights/search?departureDate="+req.body.startDate+"&returnDate="+req.body.endDate+"&departureAirport="+req.body.departureAirport+"&arrivalAirport="+req.body.destinationAirport+"&prettyPrint=true&numberOfAdultTravelers="+req.body.adults+"&maxOfferCount=20&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767"
//     //   request({ url: urlAPI }, function(error, response, body) {
//     //     if (!error && response.statusCode == 200) {
//     //       res.send(body);
//     //     }
//     //   });
//     // });

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log('flight request from expedia response', response.body);
//       res.send(body);
//     } else {
//       console.error(error)
//     }
//   });
// });

// // AIRPORT CODE SEARCH API ================================================================= */
// router.post("/FlightCode", function(req, res) {
//   console.log('>> ENTER FLIGHT CODE API ROUTER ', req.body);
//   // console.log('REQUEST IN FLIGHT CODE', req)
//   // console.log('REQUEST/ IN FLIGHT CODE:', req.body)
//   var urlAPI = 'https://iatacodes.org/api/v6/autocomplete?query='+req.body.locationForFlightSearch+'&api_key='+api.flightCode;

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log('>>>>>> ', response.body);
//       res.send(response.body);
//     }
//   });
// });




// ////////////TEST APIS/////////////

// // router.post('/hotel-resp/', function(req, res) {
// //   console.log("REQBODY", req.body)
// //   db.knex.insert({'dummyInfo': JSON.stringify(req.body.result.hotel)})
// //   .into('dummyHotel')
// //   .then(function(info) {
// //     console.log("DUMMYINFO", info)
// //     res.send(info);
// //   })
// //   .catch(function(error) {
// //     console.error(error)
// //   });
// // });


// // router.get('/airport-list/', function(req, res){
// //     var all = [];
// //     All.forEach(function(airport){
// //       if(Valid.indexOf(airport.code) !== -1){
// //         all.push(airport);
// //       }
// //     })
// //     var selectableAirports = all.map(function(airport, i){
// //       return airport.name
// //     });
// //     console.log(selectableAirports);
// //   res.send(selectableAirports)
// // });



// ACTIVITIES SEARCH API ================================================================== 
router.post("/ActivitiesSearch", function(req, res) {
  // console.log('>> ENTER ACTIVITIES API ROUTER ', req.body);

  var urlAPI = 'http://terminal2.expedia.com:80/x/activities/search?location='+req.body.location+'&startDate='+req.body.startDate+'&endDate='+req.body.endDate+'&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767'

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('Hotel Response Body', body);
      res.send(body);
    }
  });
});



  // request({ url: TEST_URL }, function(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log('CAR RENTAL RESPONSE: ', body);
  //     res.send(body);
  //   }
  // });



module.exports = router;
