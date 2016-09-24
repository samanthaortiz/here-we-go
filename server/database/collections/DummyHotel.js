import db from './db';
import HotelDummy from './booking';

let HotelDummies = new db.Collection();
HotelDummies.model = HotelDummy;

export default HotelDummies;