var db = require('./db');
var Activity = require('../models/Activity');

var Activities = new db.Collection();
Activities.model = Activity;

// export default Activities;
module.exports = Activities;