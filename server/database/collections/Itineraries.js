import db from './db';
import Itinerary from '../models/Itinerary';

let Itineraries = new db.Collection();
Itineraries.model = Itinerary;

// export default Itineraries;
module.exports = Itineraries;