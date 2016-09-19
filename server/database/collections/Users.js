import db from '../db';
import User from '../models/user';

let Users = new db.Collection();
Users.model = User;

export default Users;