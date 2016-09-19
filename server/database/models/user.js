import db from '../db';

let User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true
})

export default User;