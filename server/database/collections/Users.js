var db = require('../db');
var User = require('../models/User');

var Users = new db.Collection();
Users.model = User;

// export default Users;
module.exports = Users;