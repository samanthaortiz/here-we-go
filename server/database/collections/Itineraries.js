import db from './db';
import Itinerary from './itinerary';

let Itineraries = new db.Collection();
Itineraries.model = Itinerary;

export default Itineraries;