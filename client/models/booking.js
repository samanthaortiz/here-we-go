let db = require('../config');
let Itinerary = require('./itinerary')

let Booking = db.Model.extend({
	tableName: 'bookings',
	hasTimestamps: true
})

module.exports = Booking;