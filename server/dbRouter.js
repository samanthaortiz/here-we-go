var router = require("express").Router();
var db = require('./database/db.js');

// // // HOTEL SEARCH API ================================================================== */
// function getHotelData(req, res, next) {
//   // console.log('>> ENTER HOTEL API ROUTER ', req.body);

//   var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.data = [];
//       res.data.push({ hotelData: JSON.parse(body) });
//       next();
//     }
//   });
// }


module.exports = {

  budgetData: function(req, res, next) {
    // console.log('>>>>> SAVING BUDGET TO DATABASE: ', req.body);
    // RAW SQL: INSERT INTO budgets (budgets.type_id, budgets.budget) VALUES 
    //((SELECT types.id FROM types WHERE types.reservationType = 'hotel'), 100)

    var subSQL;
    var data = req.body;

    for(var key in data) {
      if(data.hasOwnProperty(key)) {
        subSQL = db.knex('types').where('reservationType', key).select('id');
        db.knex('budgets').insert({budget: data[key], type_id: subSQL})
        .then(function(user) {
          next();
        })
        .catch(function(error) {
          console.error(error)
        });
      };
    };
  },

  hotelItin: function(req, res, next){
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0]
    db.knex('hotelReservations').where('hotelReservations.user_email', email).select("*")
    .then(function(info) {
      res.data = info;
      next();
    })
    .catch(function(error) {
      console.error(error)
    });
  },

  flightItin: function(req, res, next){
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0]
    db.knex('flightReservations').where('flightReservations.user_email', email).select("*")
    .then(function(info) {
      res.data = info;
      next();
    })
    .catch(function(error) {
      console.error(error)
    });
  },

  carItin: function(req, res, next){
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0]
    db.knex('carRentals').where('carRentals.user_email', email).select("*")
    .then(function(info) {
      res.data = info;
      next();
    })
    .catch(function(error) {
      console.error(error)
    });
  }

  // activityItin: function(req, res, next){
  //   console.log('>>>>> SAVING ACTIVITIES ITIN TO DATABASE: ', req.body);
  //   // RAW SQL: SELECT * FROM activites VALUES WHERE hotel.user_email = email), 100)
  //   console.log('this is the req body',req.body)
  //   var email = req.body.email;
  //   // var info;
  //   db.knex('carRentals').where('activities.user_email', email).select("*")
  //   .then(function(info) {
  //     res.data = info;
  //     next();
  //   })
  //   .catch(function(error) {
  //     console.error(error)
  //   });
  // }
}
