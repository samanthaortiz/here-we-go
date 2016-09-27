import DB from '../db';

let User = DB.Model.extend({
	tableName: 'users',
	hasTimestamps: true
})

// console.log(User)
module.exports = DB.model('User', User);