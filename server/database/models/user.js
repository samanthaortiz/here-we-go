var db require('../db');

let User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true
})

// console.log(User)
module.exports = db.model('User', User);