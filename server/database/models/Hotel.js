var db = require('../db');
// import Itinerary from './Itinerary';
var Status = require('./Status');
var Type = require('./Type');

var Hotel = db.Model.extend({
	tableName: 'hotelReservations',
	// trip_id() {
	// 	return this.belongsTo(Itinerary, 'trip_id');
	// },
	status_id() {
		return this.belongsTo(Status, 'status_id');
	},
	type_id() {
		return this.belongsTo(Type, 'type_id');
	},

	hasTimestamps: true
})

// export default Hotel;
module.exports = db.model('Hotel', Hotel);