let db = require('../config');
let Users = require('./user');
let Bookings = require('./booking')

let Itinerary = db.Model.extend({
	tableName: 'itineraries',
	user_id: function(){
		return this.belongsTo(Users, 'user_id');
	},
	booking_id: function(){
		return this.belongsTo(Bookings, 'booking_id');
	},
	hasTimestamps: true
})

module.exports = Itinerary;