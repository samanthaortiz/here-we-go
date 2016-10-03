import db from '../db';
// import Itinerary from './Itinerary';
import Status from './Status';
import Type from './Type';

let Flight = db.Model.extend({
	tableName: 'flightReservations',
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

// export default Flight;
module.exports = db.model('Flight', Flight);