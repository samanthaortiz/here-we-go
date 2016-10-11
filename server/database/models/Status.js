var db = require('../db');

var Status = db.Model.extend({
	tableName: 'statuses',
	hasTimestamps: true
})

// export default Status;
module.exports = db.model('Status', Status);
