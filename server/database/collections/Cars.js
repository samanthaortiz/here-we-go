var db = require('./db');
var Car = require('../models/Car');

var Cars = new db.Collection();
Cars.model = Car;

// export default Cars;
module.exports = Cars;