import db from './db';

let HotelResponse = db.Model.extend({
	tableName: 'dummyHotel'
})

export default HotelResponse;

