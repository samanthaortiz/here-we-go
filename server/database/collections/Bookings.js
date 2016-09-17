import db from './db';
import Booking from './booking';

let Bookings = new db.Collection();
Bookings.model = Booking;

export default Bookings;