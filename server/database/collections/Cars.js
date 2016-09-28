import db from './db';
import Car from '../models/Car';

let Cars = new db.Collection();
Cars.model = Car;

// export default Cars;
module.exports = Cars;