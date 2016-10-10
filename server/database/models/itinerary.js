var db require('../db');
var User require('./User');

let Itinerary = db.Model.extend({
  tableName: 'itineraries',
  user_email() {
    return this.belongsTo(User, 'email');
  },
  hasTimestamps: true
})

// export default Itinerary;
module.exports = db.model('Itinerary', Itinerary);
