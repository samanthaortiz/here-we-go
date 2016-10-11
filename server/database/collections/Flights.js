var db = require('./db');
var Flight = require('../models/Flight');

var Flights = new db.Collection();
Flights.model = Flight;

// export default Flights;
module.exports = Flights;