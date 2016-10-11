var db = require('./db');
var Hotel = require('../models/Hotel');

var Hotels = new db.Collection();
Hotels.model = Hotel;

// export default Hotels;
module.exports = Hotels;