import db from './db';
import Itinerary from './Itinerary';
import Type from './Type';

let Budget = db.Model.extend({
	tableName: 'budgets',
	trip_id() {
		return this.belongsTo(Itinerary, 'trip_id');
	},
	type_id() {
		return this.belongsTo(Type, 'type_id');
	},

	hasTimestamps: true
})

// export default Budget;
module.exports = db.model('Budget', Budget);