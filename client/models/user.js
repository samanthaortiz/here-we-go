let db = require('../config');

let User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true
})

module.exports = User;