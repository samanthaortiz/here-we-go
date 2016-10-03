import db from './db';
import Budget from '../models/Budget';

let Budgets = new db.Collection();
Budgets.model = Budget;

// export default Budgets;
module.exports = Budgets;