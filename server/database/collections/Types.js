import db from './db';
import Type from '../models/Type';

let Types = new db.Collection();
Types.model = Type;

// export default Types;
module.exports = Types;