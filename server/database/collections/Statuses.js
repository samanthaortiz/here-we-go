var db = require('./db');
var Status = require('../models/Status')

var Statuses = new db.Collection();
Statuses.model = Status;

// export default Statuses;
module.exports = Statuses;