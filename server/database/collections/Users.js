import db from '../db';
import User from '../models/User';

let Users = new db.Collection();
Users.model = User;

// export default Users;
module.exports = Users;