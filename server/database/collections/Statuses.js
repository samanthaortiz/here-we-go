import db from './db';
import Status from './status';

let Statuses = new db.Collection();
Statuses.model = Status;

export default Statuses;