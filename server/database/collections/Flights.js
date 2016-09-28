import db from './db';
import Flight from '../models/Flight';

let Flights = new db.Collection();
Flights.model = Flight;

// export default Flights;
module.exports = Flights;