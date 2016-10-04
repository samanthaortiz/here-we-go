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
  // ,
  // function(req, res) {
  //   console.log('RESPONSE GOING TO SPLASH PAGE', res);
  //   res.redirect('/');
  // }
);

<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======

>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======

>>>>>>> feat(Database): User email linked to each table
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
=======

>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
router.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    //add msql connection 
    user: req.user
  });
}); 

<<<<<<< a94472299bb4b7a89ce7ce0d7227499d940f542c
<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 3ccb13c0d88034756c87f97782a85f59275247b6
<<<<<<< c42c6ab96797fd247154a4ed3ffba178c975f33d
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< 024a3bd273fed2c0a6bddc26d59bbff0b34c6ed1
<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< edd33282155155ccc4cec088405ebfea1cc640fc
<<<<<<< cac1a4bc6d44d3610c4146ac9259da7cd387c936
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
var url = require('url');
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
=======
=======
=======
=======
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
>>>>>>> feat(Database): User email linked to each table
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
var url = require('url');
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Database): User email linked to each table
=======
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
>>>>>>> feat(Routes): Routes and server changes
=======
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 024a3bd273fed2c0a6bddc26d59bbff0b34c6ed1
>>>>>>> feat(Database): User email linked to each table
=======
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
=======
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
var url = require('url');

>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 31c97592f3d0981918397a9cedc96f755d626708
var url = require('url');

=======
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
var url = require('url');
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes

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
<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
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
<<<<<<< a94472299bb4b7a89ce7ce0d7227499d940f542c
<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 024a3bd273fed2c0a6bddc26d59bbff0b34c6ed1
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< edd33282155155ccc4cec088405ebfea1cc640fc
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
=======
=======
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 31c97592f3d0981918397a9cedc96f755d626708
=======
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
});

router.post('/hotelItin', function(req, res) {
  // console.log('>>>>> SAVING HOTEL ITIN TO DATABASE: ', req.body);
  // RAW SQL: SELECT * FROM hotelReservations VALUES WHERE hotel.user_email = email), 100)
  console.log('this is the req body',req.body)
  var subSQL;
  var email = req.body.email;
  // var info;
    db.knex('hotelReservations').where('hotelReservations.user_email', email).select("*")
    .then(function(info) {
      // info = data
      console.log('GOT INFO', info)
      res.send(info);
    })
    .catch(function(error) {
      console.error(error)
    });
});

router.post('/flightItin', function(req, res) {
<<<<<<< 546279dadafc751fb02f9fe439e31e811ff3c3c0
  console.log('>>>>> SAVING FLIGHT ITIN TO DATABASE: ', req.body);
  var subSQL;
  var email = req.body.email;

  db.knex('flightReservations').where('flightReservations.user_email', email).select("*")
  .then(function(info) {
    console.log('GOT INFO', info)
    res.send(info);
  })
  .catch(function(error) {
    console.error(error)
  });
=======
  // console.log('>>>>> SAVING FLIGHT ITIN TO DATABASE: ', req.body);
  // RAW SQL: SELECT * FROM flightReservations VALUES WHERE hotel.user_email = email)
  console.log('this is the req body',req.body)
  var email = req.body.email;
  // var info;
    db.knex('flightReservations').where('flightReservations.user_email', email).select("*")
    .then(function(info) {
      console.log('GOT INFO', info)
      res.send(info);
    })
    .catch(function(error) {
      console.error(error)
    });
>>>>>>> Routing updated
});


router.post('/carItin', function(req, res) {
  // console.log('>>>>> SAVING CARRENTALS ITIN TO DATABASE: ', req.body);
  // RAW SQL: SELECT * FROM carRentals VALUES WHERE hotel.user_email = email), 100)
  console.log('this is the req body',req.body)
  var email = req.body.email;
  // var info;
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
//     // console.log('>>>>> SAVING HOTEL ITIN TO DATABASE: ', req.body);
//   // RAW SQL: SELECT * FROM hotelReservations VALUES WHERE hotel.user_email = email), 100)
//   console.log('this is the req body',req.body)
//   var email = req.body.email;
//   // var info;
//     db.knex('activities').where('activities.user_email', email).select("*")
//     .then(function(info) {
//       console.log('GOT INFO', info)
//       res.send(info);
//     })
//     .catch(function(error) {
//       console.error(error)
//     });
// });






=======
// GET USERNAME
router.post('/user-account/', function(req, res) {
  console.log("USER REQ", res);
  // db.knex.select('*')
  // .from('users')
  // .where({'email': req})
  // .then(function(user) {
  //   res.send(user);
  //   console.log("USER ACCOUNT", user)
  // })
  // .catch(function(error) {
  //   console.error(error)
  // });
});

>>>>>>> feat(Database): User email linked to each table
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54


=======
=======
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< cac1a4bc6d44d3610c4146ac9259da7cd387c936
>>>>>>> feat(Routes): Routes and server changes
=======
// GET USERNAME
router.post('/user-account/', function(req, res) {
  console.log("USER REQ", res);
  // db.knex.select('*')
  // .from('users')
  // .where({'email': req})
  // .then(function(user) {
  //   res.send(user);
  //   console.log("USER ACCOUNT", user)
  // })
  // .catch(function(error) {
  //   console.error(error)
  // });
=======
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< edd33282155155ccc4cec088405ebfea1cc640fc
=======
>>>>>>> feat(Database): User email linked to each table


>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
});

>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Routes): Routes and server changes
=======
// GET USERNAME
router.post('/user-account/', function(req, res) {
  console.log("USER REQ", res);
  // db.knex.select('*')
  // .from('users')
  // .where({'email': req})
  // .then(function(user) {
  //   res.send(user);
  //   console.log("USER ACCOUNT", user)
  // })
  // .catch(function(error) {
  //   console.error(error)
  // });
=======
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 3ccb13c0d88034756c87f97782a85f59275247b6
<<<<<<< c42c6ab96797fd247154a4ed3ffba178c975f33d
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
=======
=======
=======
>>>>>>> feat(Routes): Routes and server changes
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
// GET USERNAME
router.post('/user-account/', function(req, res) {
  console.log("USER REQ", res);
  // db.knex.select('*')
  // .from('users')
  // .where({'email': req})
  // .then(function(user) {
  //   res.send(user);
  //   console.log("USER ACCOUNT", user)
  // })
  // .catch(function(error) {
  //   console.error(error)
  // });
});
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 3ccb13c0d88034756c87f97782a85f59275247b6
<<<<<<< c42c6ab96797fd247154a4ed3ffba178c975f33d
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f

>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table

=======
});
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 04a0d22977b681bb3a74aa3cda575828ec17c2e4
});
=======


>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
=======

>>>>>>> feat(Database): User email linked to each table

>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table

<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
});

>>>>>>> feat(Routes): Routes and server changes
<<<<<<< a94472299bb4b7a89ce7ce0d7227499d940f542c
=======
<<<<<<< 31c97592f3d0981918397a9cedc96f755d626708
=======
=======
// GET USERNAME
router.post('/user-account/', function(req, res) {
  console.log("USER REQ", res);
  // db.knex.select('*')
  // .from('users')
  // .where({'email': req})
  // .then(function(user) {
  //   res.send(user);
  //   console.log("USER ACCOUNT", user)
  // })
  // .catch(function(error) {
  //   console.error(error)
  // });
=======
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b


>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
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

<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
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

<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Routes): Routes and server changes
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes

module.exports = router;