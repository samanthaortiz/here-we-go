var router = require("express").Router();
var db = require('./database/db.js');

module.exports = {

  budgetData: function(req, res, next) {

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
  },

  activityItin: function(req, res, next){
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0]
    db.knex('activities').where('activities.user_email', email).select("*")
    .then(function(info) {
      res.data = info;
      next();
    })
    .catch(function(error) {
      console.error(error)
    });
  }
}