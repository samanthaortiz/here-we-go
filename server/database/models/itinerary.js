import db from './db';
import Users from './user';
import Bookings from './booking';
import Statuses from './status';


let Itinerary = db.Model.extend({
	tableName: 'itineraries',
	user_id() {
		return this.belongsTo(Users, 'user_id');
	},
	booking_id() {
		return this.belongsTo(Bookings, 'booking_id');
	},
	status_id() {
		return this.belongsTo(Statuses, 'status_id');
	},
	hasTimestamps: true
})

export default Itinerary;