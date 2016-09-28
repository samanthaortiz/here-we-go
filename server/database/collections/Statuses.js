import db from './db';
import Status from '../models/Status';

let Statuses = new db.Collection();
Statuses.model = Status;

// export default Statuses;
module.exports = Statuses;