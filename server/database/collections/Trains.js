var db = require('./db');
var Train = require('../models/Train');

var Trains = new db.Collection();
Trains.model = Train;

// export default Trains;
module.exports = Trains;