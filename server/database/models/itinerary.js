import db from '../db';
import User from './User';

let Itinerary = db.Model.extend({
<<<<<<< HEAD
  tableName: 'itineraries',
  user_email() {
    return this.belongsTo(User, 'email');
  },
  hasTimestamps: true
=======
	tableName: 'itineraries',
	user_email() {
		return this.belongsTo(User, 'email');
	},
	hasTimestamps: true
>>>>>>> dev
})

// export default Itinerary;
module.exports = db.model('Itinerary', Itinerary);