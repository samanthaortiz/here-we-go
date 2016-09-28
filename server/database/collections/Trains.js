import db from './db';
import Train from '../models/Train';

let Trains = new db.Collection();
Trains.model = Train;

// export default Trains;
module.exports = Trains;