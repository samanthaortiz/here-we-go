import db from './db';
import Activity from '../models/Activity';

let Activities = new db.Collection();
Activities.model = Activity;

// export default Activities;
module.exports = Activities;