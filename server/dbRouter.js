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

  newTrip: function(req, res, next){
    
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
  },

  changeStatus: function(req, res, next){
    //check to change FROM saved TO booked
    if(req.body.statusId === 2){
      if(req.body.typeId === 1){
        //check for flight
        db.knex('flightReservations').where('flightReservations.id', req.body.itemId).update("flightReservations.status_id", 1)
        .then(function(){
          // console.log('flight res info changing to saved... res:', res);
          // res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 2){
        //check for hotels
        db.knex('hotelReservations').where('hotelReservations.id', req.body.itemId).update("hotelReservations.status_id", 1)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 3){
        //check for car rentals
        db.knex('carRentals').where('carRentals.id', req.body.itemId).update("carRentals.status_id", 1)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 4){
        //check for activities
        db.knex('activities').where('activities.id', req.body.itemId).update("activities.status_id", 1)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      }
    } else if (req.body.statusId === 1){
      //check for change FROM BOOKED to SAVED
      if(req.body.typeId === 1){
        //check for flight
        db.knex('flightReservations').where('flightReservations.id', req.body.itemId).update("flightReservations.status_id", 2)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 2){
        //check for hotels
        db.knex('hotelReservations').where('hotelReservations.id', req.body.itemId).update("hotelReservations.status_id", 2)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 3){
        //check for car rentals
        db.knex('carRentals').where('carRentals.id', req.body.itemId).update("carRentals.status_id", 2)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 4){
        //check for activities
        db.knex('activities').where('activities.id', req.body.itemId).update("activities.status_id", 2)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      }
    }
  }
}