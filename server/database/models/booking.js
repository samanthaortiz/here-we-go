import db from './db';

let Booking = db.Model.extend({
	tableName: 'bookings',
	hasTimestamps: true
})

export default Booking;