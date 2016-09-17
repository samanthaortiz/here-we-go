import db from './db';
import User from './user';

let Users = new db.Collection();
Users.model = User;

export default Users;