import db from './db';

let Status = db.Model.extend({
	tableName: 'statuses',
	hasTimestamps: true
})

// export default Status;
module.exports = db.model('Status', Status);