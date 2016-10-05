var reservationRoutes = require("express").Router();
var request = require('request');
var db = require('../database/db.js');

reservationRoutes.post('/hotelReservations', function(req, res) {
  console.log('this is the req body: ', req.body);
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
});

reservationRoutes.post('/flightReservation', function(req, res) {

});

reservationRoutes.post('/carReservation', function(req, res) {
  console.log('>>>>> SAVING CAR ITIN TO DATABASE: ', req.body);
  
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
});

reservationRoutes.post('/activityReservation', function(req, res) {
  
});

module.exports = reservationRoutes;
