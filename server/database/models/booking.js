import db from './db';
import Itinerary from './itinerary';

let Booking = db.Model.extend({
	tableName: 'bookings',
	hasTimestamps: true
})

export default Booking;