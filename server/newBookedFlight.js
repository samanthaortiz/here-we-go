var db = require('./database/db.js');
var Flight = require('./database/models/Flight');

var bookedFlight = function(item, email){
  item.payload.reservationFor.forEach(function(leg){
    new Flight({
      status_id: 1,
      type_id: 1,
      sift_id: item.sift_id,
      user_email: email,
      departureAirportName: leg.departureAirport.name,
      departureAirportCode: leg.departureAirport.iataCode,
      departureAirportCity: leg.departureAirport["x-cityName"],
      arrivalAirportName: leg.arrivalAirport.name,
      arrivalAirportCode: leg.arrivalAirport.iataCode,
      arrivalAirportCity: leg.arrivalAirport["x-cityName"],
      departureTime: leg.departureTime,
      arrivalTime: leg.arrivalTime,
      airline: leg.seller.name,
      flightNumber: leg.flightNumber,
      // ticketNumber:
      // seatType:
      // seatRow:
      // seatNumber:
      // membershipNumber: 
      broker: item.payload.broker.name
    })
    .save() 
  })
}
module.exports = bookedFlight