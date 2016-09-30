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
<<<<<<< 144b43525aba1971923632ee6ae1be5c3609fb04
    successRedirect: "https://api.easilydo.com/v1/connect_email?api_key=" + siftConfig.sift.API_KEY + "&username=eroussopoulos@gmail.com" + "&token=5065399dc833fabebfa3fd5d978b3c25&redirect_url=http://localhost:4000/"
=======
    successRedirect: "https://api.easilydo.com/v1/connect_email?api_key=" + siftConfig.sift.API_KEY + "&username=eroussopoulos@gmail.com" + "&token=0d2aa1c632831d4c41abf168864caa01&redirect_url=http://localhost:4000/"
>>>>>>> chore(Styles): Added styles to the dashboard page

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
<<<<<<< 70c02c4dbb6e2dc031d6794bd33c8ccc7daa609c
<<<<<<< e4254f583fde345177f0c22b44eff848ed4c1466
<<<<<<< 954aa32508b721fa09ab813600cb80235134b41f
<<<<<<< 05925d8fe93426b6938b3cb3e236c5eca0a256ba
<<<<<<< 71e5a5f262df48834644e44314126548fb7503c9
<<<<<<< 755bbfc3145bd0b0ff28596adb9c4288347236f5
<<<<<<< e90e10ef6cabd6dffb86ee71e5183f55bd17dc76
<<<<<<< 7464f04bf17764da7fb0f73f785df221fca242cf
<<<<<<< 1cb83ad6a061a25256399afc25cd284b0dae5a8e
<<<<<<< e7d5fd27f7479dc1497b2a5ebf07d33787fce4d3
<<<<<<< 69ac8ee540ad74740c5c586f9f3b1291b0178a2a
<<<<<<< f68c22faf592d3e1d05150b7dd8f2b2543cdd88c
<<<<<<< bd3cd26063108da1e8ce4a1c1d225581be235395
<<<<<<< ba2babc299e785f56b2e5117e05f65d120cb5f55
<<<<<<< b662ae37bf85f82cd621019d3053874e3c9d93e8
<<<<<<< 7e284b8b120f32b3ba2d416dd6d26517c5af9517
<<<<<<< 18c3a8a024791417e31e679c32de9ecd57b8cf0f
<<<<<<< 6e5551b708a2f4d196e83a34644daaaba250d3ef
<<<<<<< e16e1e5d215f2d3957596ba319e25f345ee8af15
<<<<<<< 49f8ebf8ba68f0a148f249789ee950a253884aa7
<<<<<<< f31ae0137620402c93b920ae0f8f3e75c1a579e0
<<<<<<< 5624af568c5592224298283ad898eab589affc5e
<<<<<<< 7f82ca726a44e8c9c084325eb1d9a4c05b229eee
<<<<<<< 29667d1606633de43ae89ddb71522c7b1cfb873f
<<<<<<< 18cecf01a84239ad84e4a9d6495ee4a5108a1e16
<<<<<<< 770d37687bfa2320ed8dad22cb79fdf393d906b0
<<<<<<< a25859445bb90fcad3b0260202e62aaaff74435d
<<<<<<< 98a7fc4864bce85fe578b00bcafa88ec9968b995
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
<<<<<<< c7b0a226cc5b362728a14fb6d97b0408e5a49da8
>>>>>>> fix code
<<<<<<< e00148aba0ac05361fcef413c34f4e2e2db0b0ed
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 44fd74dd95effc4bb84e12e506b9b91414952a10
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 1bfee55d6674a8b415391c1ed50115215053d710
>>>>>>> fix code
<<<<<<< c19f20061e6e3943db0395e1b9036337db9a7429
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< d520e4c67170cc9b02b8b2bc861a254dc85c42b3
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 15cb286807499e04e92fa052f7988f2f6112667d
>>>>>>> Fix merge conflicts
<<<<<<< a9e773abfb091f3255a4b16046c3d9331ba6a0c4
>>>>>>> fix code
<<<<<<< 37efff517931d54b69c0dc129626fe278938d9bc
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 186196ab4e5524e5d5c8aefb7aba7232840ed0c3
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 5ab0a05e606c7d01b2a1c99b09d9be84fd7796d3
>>>>>>> fix code
<<<<<<< 35185295f44cb696c95783e95829eb359a7c402b
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 3e4ff4bb01dc2963e17f8ce4ba2c63ff14698577
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

<<<<<<< f68c22faf592d3e1d05150b7dd8f2b2543cdd88c
=======
=======
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
router.post("/FlightSearch", function(req, res) {
  // console.log('>> ENTER FLIGHT API ROUTER ', req.body);
  
=======
<<<<<<< 69ac8ee540ad74740c5c586f9f3b1291b0178a2a
<<<<<<< bd3cd26063108da1e8ce4a1c1d225581be235395
=======

>>>>>>> fix code
=======
=======
<<<<<<< 7464f04bf17764da7fb0f73f785df221fca242cf
<<<<<<< 1cb83ad6a061a25256399afc25cd284b0dae5a8e
=======
<<<<<<< bdd2aceaf1969d5a35746d8d638d9b015d6e0e7c
>>>>>>> fix code
=======
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
<<<<<<< bdd2aceaf1969d5a35746d8d638d9b015d6e0e7c
>>>>>>> fix code
>>>>>>> fix code
<<<<<<< b1848dc86c4700f0c2750862fdcd197beb2d0e4d
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 7464f04bf17764da7fb0f73f785df221fca242cf
<<<<<<< 7f82ca726a44e8c9c084325eb1d9a4c05b229eee
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======

>>>>>>> fix code
<<<<<<< e7d5fd27f7479dc1497b2a5ebf07d33787fce4d3
>>>>>>> fix code
=======

>>>>>>> Fix merge conflicts
=======
=======

>>>>>>> fix code
>>>>>>> fix code
=======
=======
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2

=======
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
=======
<<<<<<< a9e773abfb091f3255a4b16046c3d9331ba6a0c4
>>>>>>> fix code
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
<<<<<<< 05925d8fe93426b6938b3cb3e236c5eca0a256ba
<<<<<<< 71e5a5f262df48834644e44314126548fb7503c9
=======
=======
=======
<<<<<<< e4254f583fde345177f0c22b44eff848ed4c1466
=======
=======
<<<<<<< 70c02c4dbb6e2dc031d6794bd33c8ccc7daa609c
<<<<<<< 954aa32508b721fa09ab813600cb80235134b41f
<<<<<<< 20906553828de195c8daae8903d9b463f265e24c
>>>>>>> Fix merge conflicts
<<<<<<< 82d1fb6fef08b3c9faea53bf554014ca25529310
>>>>>>> fix code
=======
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
<<<<<<< 82d1fb6fef08b3c9faea53bf554014ca25529310
>>>>>>> fix code
>>>>>>> fix code
<<<<<<< 38a146ff35915b9742ddbef836c64ddabdcf9651
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 41bdead0806d5f1f19690752b2c7ee94bf634b43
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
>>>>>>> fix code
=======
=======
<<<<<<< 41bdead0806d5f1f19690752b2c7ee94bf634b43
>>>>>>> chore(Styles): added css to autocomplete input field
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
<<<<<<< 954aa32508b721fa09ab813600cb80235134b41f
<<<<<<< 05925d8fe93426b6938b3cb3e236c5eca0a256ba
=======
=======
<<<<<<< e4254f583fde345177f0c22b44eff848ed4c1466
=======
<<<<<<< bdd2aceaf1969d5a35746d8d638d9b015d6e0e7c
>>>>>>> fix code
=======
<<<<<<< 70c02c4dbb6e2dc031d6794bd33c8ccc7daa609c
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
<<<<<<< bdd2aceaf1969d5a35746d8d638d9b015d6e0e7c
>>>>>>> fix code
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
<<<<<<< 70c02c4dbb6e2dc031d6794bd33c8ccc7daa609c
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======

>>>>>>> fix code
>>>>>>> fix code
=======

>>>>>>> Fix merge conflicts
=======
=======
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2

=======
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER FLIGHT API ROUTER ', req.body);
<<<<<<< 755bbfc3145bd0b0ff28596adb9c4288347236f5
=======
=======
=======
<<<<<<< 6b2ea6eff216e301ea1c168b4687bfc3533cbc90
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< f2069aa4b70c4ce99fe0736eccc90e1035eeeb77
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field

=======
=======
>>>>>>> fix code
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======

>>>>>>> fix code
>>>>>>> fix code
router.post("/FlightSearch", function(req, res) {
  // console.log('>> ENTER FLIGHT API ROUTER ', req.body);
=======
=======
>>>>>>> fix code
router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER FLIGHT API ROUTER ', req.body);
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field

>>>>>>> chore(Styles): added css to autocomplete input field
=======

router.post("/FlightSearch", function(req, res) {
>>>>>>> Begin sift to db
=======
router.post("/FlightSearch", function(req, res) {
  console.log('>> ENTER FLIGHT API ROUTER ', req.body);

>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
  var urlAPI =  "http://terminal2.expedia.com:80/x/mflights/search?departureDate="+req.body.startDate+"&returnDate="+req.body.endDate+"&departureAirport="+req.body.departureAirport+"&arrivalAirport="+req.body.destinationAirport+"&prettyPrint=true&numberOfAdultTravelers="+req.body.adults+"&maxOfferCount=20&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767"

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      console.error(error)
    }
  });
});

router.post('/trips', hotelRoute, carRoute, activityRoute, flightRoute.getFlightCode, function(req, res, next) {
  res.send(res.data);
});



// SIFT DATA TO DATABASE ================================================================
// router.post('/sift', function(req, res) {

//   // HOTEL DATA =================================
//   console.log('SIFT RESPONSE DATA: ', res.body);

// })














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

<<<<<<< bd3cd26063108da1e8ce4a1c1d225581be235395
=======


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
>>>>>>> chore(Styles): added css to autocomplete input field






module.exports = router;