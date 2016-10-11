var db = require('./db');
var Itinerary = require('../models/Itinerary');

var Itineraries = new db.Collection();
Itineraries.model = Itinerary;

// export default Itineraries;
module.exports = Itineraries;