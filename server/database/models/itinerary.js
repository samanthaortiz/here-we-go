import db from './db';
import Users from './user';
import Bookings from './booking';

let Itinerary = db.Model.extend({
	tableName: 'itineraries',
	user_id() {
		return this.belongsTo(Users, 'user_id');
	},
	booking_id() {
		return this.belongsTo(Bookings, 'booking_id');
	},
	hasTimestamps: true
})

export default Itinerary;