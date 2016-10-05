var reservationRoutes = require("express").Router();
var request = require('request');
var db = require('../database/db.js');

reservationRoutes.post('/hotelReservations', function(req, res) {
  console.log('>>>>> SAVING HOTEL RESERVATION: ', req.body);
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
  onsole.log('>>>>> SAVING FLIGHT RESERVATION: ', req.body);
});

reservationRoutes.post('/carReservation', function(req, res) {
  console.log('>>>>> SAVING CAR RESERVATION: ', req.body);
  
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
  console.log('>>>>> SAVING ACTIVITY RESERVATION: ', req.body);
});

module.exports = reservationRoutes;
