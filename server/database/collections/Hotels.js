import db from './db';
import Hotel from '../models/Hotel';

let Hotels = new db.Collection();
Hotels.model = Hotel;

// export default Hotels;
module.exports = Hotels;