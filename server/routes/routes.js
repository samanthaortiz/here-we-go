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

<<<<<<< bfc3693c814327ca4a93c65a9f6daa3eb04aab7c
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 5289ffb71c2309a10e7505622f4463f31c76378e
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 02f81e8c5223072afd89578d47100b9619cec30e
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
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
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
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
=======
=======
=======
=======
=======
=======
=======
=======
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======

>>>>>>> feat(Database): User email linked to each table
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======

>>>>>>> feat(Database): User email linked to each table
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
router.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    //add msql connection 
    user: req.user
  });
}); 

<<<<<<< f0ce8429911496aff226e74601e00fdca8d0c262
<<<<<<< 4a7a99b594b6661e16ee1f69a6baa0534729cedd
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< e540e9c0377bce62d9aaacc892ad47c878276bf5
<<<<<<< 0b0d5e9e25cdf39754d0b54b6dece655ff2c1930
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< f12cecc570447b38609ab558bb14614442b52ad0
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< 6623b3353bd23542e20a0b51df8fc42befc326d7
<<<<<<< 8153ee4e373a1c219af1040cb7691b2973e84eba
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< eb8b55ca6462177ef658888c59b5654d14af7478
<<<<<<< 086136b4d63291f06707b5df8739a3746777c66c
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< d62aeb5cf73a7c56371b8948e4ccc655e6315443
<<<<<<< b87257826dd4ae830a010ea0b2a6ba055206c281
<<<<<<< 02f81e8c5223072afd89578d47100b9619cec30e
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
=======
=======
=======
=======
<<<<<<< 024a3bd273fed2c0a6bddc26d59bbff0b34c6ed1
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
>>>>>>> feat(Database): User email linked to each table
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< edd33282155155ccc4cec088405ebfea1cc640fc
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< cac1a4bc6d44d3610c4146ac9259da7cd387c936
>>>>>>> feat(Database): User email linked to each table
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
>>>>>>> feat(Database): User email linked to each table
var url = require('url');
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
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
<<<<<<< 4a7a99b594b6661e16ee1f69a6baa0534729cedd
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
=======
=======
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
var url = require('url');
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
>>>>>>> feat(Database): User email linked to each table
=======
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 0b0d5e9e25cdf39754d0b54b6dece655ff2c1930
<<<<<<< 086136b4d63291f06707b5df8739a3746777c66c
>>>>>>> feat(Routes): Routes and server changes
=======
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
<<<<<<< eb8b55ca6462177ef658888c59b5654d14af7478
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
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Database): User email linked to each table
=======
=======
var url = require('url');
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes

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
<<<<<<< 4a7a99b594b6661e16ee1f69a6baa0534729cedd
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< e540e9c0377bce62d9aaacc892ad47c878276bf5
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table

=======
var url = require('url');
=======
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
var url = require('url');
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
>>>>>>> feat(Routes): Routes and server changes
=======
=======
  var url = require('url');
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table

>>>>>>> Merge conflicts
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
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 02f81e8c5223072afd89578d47100b9619cec30e
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
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
=======
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
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
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< e540e9c0377bce62d9aaacc892ad47c878276bf5
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< f12cecc570447b38609ab558bb14614442b52ad0
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< eb8b55ca6462177ef658888c59b5654d14af7478
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
<<<<<<< d62aeb5cf73a7c56371b8948e4ccc655e6315443
<<<<<<< 02f81e8c5223072afd89578d47100b9619cec30e
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
=======
>>>>>>> Merge conflicts
=======
=======
=======
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< edd33282155155ccc4cec088405ebfea1cc640fc
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
});

router.post('/hotelItin', function(req, res) {
  console.log('this is the req body: ', req.body);
  /*

    RAW SQL: INSERT INTO hotelReservations (hotelReservations.status_id, hotelReservations.type_id, hotelReservations.providerName, hotelReservations.address, hotelReservations.startDate, hotelReservations.endDate, hotelReservations.organization) VALUES ();

  */

  db.knex('hotelReservations')
    .insert({
      status_id: req.body.status_id,
      type_id: req.body.type_id,
      providerName: req.body.providerName,
      address: req.body.address,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      organization: req.body.organization
    })
    .then(function(data) {
      console.log('ADDED HOTEL');
      res.send(data);
    })
    .catch(function(error) {
      console.error(error);
    });

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
});

router.post('/flightItin', function(req, res) {
<<<<<<< e339ff194dea6fd879ee8649042ec21d5d0c08d8
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
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f


=======
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
=======
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< 086136b4d63291f06707b5df8739a3746777c66c
<<<<<<< b87257826dd4ae830a010ea0b2a6ba055206c281
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

<<<<<<< d62aeb5cf73a7c56371b8948e4ccc655e6315443
=======
>>>>>>> feat(Database): User email linked to each table


<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
});
=======
=======
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Database): User email linked to each table

>>>>>>> feat(Routes): Routes and server changes
=======
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
>>>>>>> feat(Database): User email linked to each table
<<<<<<< bfc3693c814327ca4a93c65a9f6daa3eb04aab7c
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
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

<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< 6623b3353bd23542e20a0b51df8fc42befc326d7
<<<<<<< 8153ee4e373a1c219af1040cb7691b2973e84eba
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
=======
=======
=======
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
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
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> Merge conflicts
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
<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< 6623b3353bd23542e20a0b51df8fc42befc326d7
<<<<<<< 8153ee4e373a1c219af1040cb7691b2973e84eba
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb

<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
>>>>>>> feat(Database): User email linked to each table
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
router.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    //add msql connection 
    user: req.user
  });
}); 

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
>>>>>>> feat(Database): User email linked to each table
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
});

>>>>>>> feat(Database): User email linked to each table
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
>>>>>>> feat(Database): User email linked to each table
<<<<<<< bfc3693c814327ca4a93c65a9f6daa3eb04aab7c
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1

=======
=======
=======
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
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
<<<<<<< f0ce8429911496aff226e74601e00fdca8d0c262

=======
=======
=======
<<<<<<< 4ed8cb7f53b66b054bb443303a295f1dcc9c282b
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table

>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table

<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
<<<<<<< f0ce8429911496aff226e74601e00fdca8d0c262
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
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

router.get('/logout', function (req, res, next){
  req.logout();
  res.redirect('https://accounts.google.com/logout')
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
=======
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google/');
}

// DB ================================================================================ */
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
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< f12cecc570447b38609ab558bb14614442b52ad0
=======
<<<<<<< 31c97592f3d0981918397a9cedc96f755d626708
=======
=======
<<<<<<< f0ce8429911496aff226e74601e00fdca8d0c262
=======
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


<<<<<<< 891a855f09a683faa27d992e2b7e4e57a1bfe014
  res.send();
>>>>>>> feat(Routes): Routes and server changes
});
=======
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
>>>>>>> Routing updated

>>>>>>> Merge conflicts
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

<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850

<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
=======
});
>>>>>>> Merge conflicts
=======
=======
=======
<<<<<<< 4f8db11f1a3650743826543a5ef4b0fede0ddeed
>>>>>>> feat(Routes): Routes and server changes
});

<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
<<<<<<< cac1a4bc6d44d3610c4146ac9259da7cd387c936
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 0b0d5e9e25cdf39754d0b54b6dece655ff2c1930
>>>>>>> feat(Routes): Routes and server changes
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

<<<<<<< edd33282155155ccc4cec088405ebfea1cc640fc
=======
>>>>>>> feat(Database): User email linked to each table


>>>>>>> feat(Database): User email linked to each table
<<<<<<< e540e9c0377bce62d9aaacc892ad47c878276bf5
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
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
<<<<<<< 4a7a99b594b6661e16ee1f69a6baa0534729cedd
>>>>>>> feat(Routes): Routes and server changes
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
<<<<<<< f0ce8429911496aff226e74601e00fdca8d0c262
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< bfc3693c814327ca4a93c65a9f6daa3eb04aab7c
=======
=======
});

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

<<<<<<< bfc3693c814327ca4a93c65a9f6daa3eb04aab7c
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 5289ffb71c2309a10e7505622f4463f31c76378e
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 02f81e8c5223072afd89578d47100b9619cec30e
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
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
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
=======
=======
=======
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Routes): Routes and server changes
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 5289ffb71c2309a10e7505622f4463f31c76378e
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> feat(Routes): Routes and server changes
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

<<<<<<< bfc3693c814327ca4a93c65a9f6daa3eb04aab7c
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 5289ffb71c2309a10e7505622f4463f31c76378e
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< bfc26c5bb22bff3891aeec5a37d5d8e15324dcb8
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< eafe1de20f312d9d6bd9ce7fed86f3b015b2735d
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< 11fe321f7b266e5d7ce0831ac695f0431dc47973
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< b7f701510eeb5a10fa129af89e4b10c638f2f3eb
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 02f81e8c5223072afd89578d47100b9619cec30e
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 6555def7defc39e7c072a64078fc266301812472
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
=======

>>>>>>> Merge conflicts
=======
=======
=======
=======
=======
=======
=======
<<<<<<< d54671d524e2019b63448b39fa5782aece2e2e19
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 0ecb3ef9cd46c3d4e35f97df2e1d52501d13ef2f
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< c1ede926cb880705fb79d5a238adc1cd8421cf92
>>>>>>> feat(Routes): Routes and server changes
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< f481570ed74664be39e6cabb32ce86267cb90b44
>>>>>>> feat(Routes): Routes and server changes
=======
=======
<<<<<<< eb8d84603075a422e6d14283e1c98fae8624cec0
>>>>>>> feat(Routes): Routes and server changes
=======
>>>>>>> feat(Database): User email linked to each table
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