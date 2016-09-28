import db from './db';
import User from './user';
import Statuses from './status';


let Itinerary = db.Model.extend({
	tableName: 'itineraries',
	user_id() {
		return this.belongsTo(User, 'google_id');
	},
	hasTimestamps: true
})

// export default Itinerary;
module.exports = db.model('Itinerary', Itinerary);