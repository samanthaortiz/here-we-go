var reservationRoutes = require("express").Router();
var request = require('request');
var db = require('../database/db.js');

reservationRoutes.post('/hotelReservations', function(req, res) {
  console.log('>>>>> SAVING HOTEL RESERVATION: ', req.body);
  db.knex('hotelReservations')
  .insert({
    status_id: req.body.status_id,
    type_id: req.body.type_id,
    user_email: req.body.user_email,
    providerName: req.body.providerName,
    address: req.body.address,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    days: req.body.days,
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
  console.log('>>>>> SAVING FLIGHT RESERVATION: ', req.body);
  db.knex('flightReservations')
  .insert({
    type_id: req.body.type_id,
    status_id: req.body.status_id,
    user_email: req.body.user_email,
    departureAirportCode: req.body.departureAirportCode,
    departureAirportCity: req.body.departureAirportCity,
    arrivalAirportCode: req.body.arrivalAirportCode,
    arrivalAirportCity: req.body.arrivalAirportCity,
    airline: req.body.airline,
    flightNumber: req.body.flightNumber,
    seatType: req.body.seatType,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime
  })
  .then(function(data) {
    console.log('ADDED FLIGHT');
    res.send(data);
  })
  .catch(function(error) {
    console.error(error);
  });
});

reservationRoutes.post('/carReservation', function(req, res) {
  console.log('>>>>> SAVING CAR RESERVATION: ', req.body);
  db.knex('carRentals')
    .insert({
      status_id: req.body.status_id,
      type_id: req.body.type_id,
      user_email: req.body.user_email,
      vehicleType: req.body.vehicleType,
      vehicleBrand: req.body.vehicleBrand,
      rentalCompany: req.body.rentalCompany,
      pickUpAddress: req.body.pickUpAddress,
      dropOffAddress: req.body.dropOffAddress,
      pickUpTime: req.body.pickUpTime,
      dropOffTime: req.body.dropOffTime
    })
    .then(function(data) {
      console.log('ADDED CAR');
      res.send(data);
    })
    .catch(function(error) {
      console.error(error);
    });
});

reservationRoutes.post('/activityReservation', function(req, res) {
  console.log('>>>>> SAVING ACTIVITY RESERVATION: ', req.body);
db.knex('activities')
    .insert({
      status_id: req.body.status_id,
      type_id: req.body.type_id,
      user_email: req.body.user_email,
      name: req.body.name
    })
    .then(function(data) {
      console.log('ADDED ACTIVITY');
      res.send(data);
    })
    .catch(function(error) {
      console.error(error);
    });
});


module.exports = reservationRoutes;
