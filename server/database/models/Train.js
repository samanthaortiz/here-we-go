var db = require('../db');
// import Itinerary from './Itinerary';
var Status = require('./Status');
var Type = require('./Type');

var Train = db.Model.extend({
	tableName: 'trainReservations',
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

// export default Train;
module.exports = db.model('Train', Train);