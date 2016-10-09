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
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0]
    db.knex('itineraries').insert({'itineraries.trip_name': req.body.tripName, 'itineraries.user_email': email})
    .then(function(info) {
      console.log('this is the itin info:', info)
      res.data = info
      console.log('this is the res.data', res.data)
      next();
    })
    .catch(function(error) {
      console.error(error)
    }); 
  },

  getAllTrips: function(req, res, next){
    console.log("REQ.BODY IN GET ALL TRIPS:", req.body);
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0];

    db.knex('itineraries').where('itineraries.user_email', email).select("*")
    .then(function(allTripInfo){
      console.log('this is all the trip info:', allTripInfo)
      res.data = allTripInfo
      console.log('this is all the user trip info:', res.data);
      next();
    })
    .catch(function(error){
      console.error(error)
    })
  },

  //get all trip info
  getAllTripInfo: function(req, res, next){
    // console.log("getAllTripInfo ID", req.body.tripId)
    var SQL_RAW = `SELECT itineraries.* , hotelReservations.* , flightReservations.*, carRentals.*, activities.* FROM itineraries LEFT JOIN hotelReservations ON hotelReservations.trip_id = itineraries.id LEFT JOIN flightReservations ON flightReservations.trip_id = itineraries.id LEFT JOIN carRentals ON carRentals.trip_id = itineraries.id LEFT JOIN activities ON activities.trip_id = itineraries.id WHERE itineraries.id = ${req.body.tripId}`;

    db.knex.raw(SQL_RAW)
      .then(function(rows) {
        res.data = rows[0];
        next();
    })
      .catch(function(error){
      console.error(error)
    })
  },

  updateTripId: function(req, res, next){
    console.log("REQ BODY", req.body)
        if(req.body.typeId === 1){
        //check for flight
        db.knex('flightReservations').where('flightReservations.id', req.body.itemId).update("flightReservations.trip_id", req.body.tripId)
        .then(function(){
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 2){
        // check for hotels
        db.knex('hotelReservations').where('hotelReservations.id', req.body.itemId).update("hotelReservations.trip_id", req.body.tripId)
        .then(function(){
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 3){
        //check for car rentals
        db.knex('carRentals').where('carRentals.id', req.body.itemId).update("carRentals.trip_id", req.body.tripId)
        .then(function(){
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } else if(req.body.typeId === 4){
        //check for activities
        db.knex('activities').where('activities.id', req.body.itemId).update("activities.trip_id", req.body.tripId)
        .then(function(){
          next();
        })
        .catch(function(error){
          console.error(error)
        });
    }
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