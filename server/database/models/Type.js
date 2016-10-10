var db require('../db');

let Type = db.Model.extend({
	tableName: 'types',
	hasTimestamps: true
})

// export default Type;
module.exports = db.model('Type', Type);