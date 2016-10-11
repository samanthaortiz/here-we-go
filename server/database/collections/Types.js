var db = require('./db');
var Type = require('../models/Type');

var Types = new db.Collection();
Types.model = Type;

// export default Types;
module.exports = Types;