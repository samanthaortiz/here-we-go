var db = require('../db');

var Type = db.Model.extend({
	tableName: 'types',
	hasTimestamps: true
})

// export default Type;
module.exports = db.model('Type', Type);