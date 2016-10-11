var db = require('./db');
var Budget = require('../models/Budget');

var Budgets = new db.Collection();
Budgets.model = Budget;

// export default Budgets;
module.exports = Budgets;