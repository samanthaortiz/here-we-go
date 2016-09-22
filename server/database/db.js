<<<<<<< 1349c5366b651fa5bc35065de7a2274e21bc20e9
<<<<<<< bf8f52ea20882d8f4170d14634f2158b9c2dcf10
<<<<<<< 71ef351ded24b9e61b09497f2176d37e12e159db
<<<<<<< fafc2b356d4cfa212741f1778df464bfa87c447f
<<<<<<< 1c237a58f1bdc8cc323865f173d6ca43135f54c7
<<<<<<< 46aa03c71bcf0219eac258ef4bb280bb820c4291
<<<<<<< 9c19c74fedd7a91c48d72bc2dee151e85b309639
=======
=======
<<<<<<< 1eac9b3e273ec7b646c1609e8ae25a3f6efb605f
>>>>>>> Deploy fixes
<<<<<<< daaaf97ba45558d68a36166d9e03541998b6e730
>>>>>>> deployment errors
=======
>>>>>>> Adding changes to db.js
=======
=======
<<<<<<< 1d4e8afaaed045e12a21a2d40da59aa350eec703
>>>>>>> Deploy fixes
<<<<<<< 5784f7964b50b4ce9c31868f850e9845d72b2629
>>>>>>> deployment errors
var config = require('./db.config.js')
=======
// let config = require('./db.config.js')
>>>>>>> deployment errors
<<<<<<< 1349c5366b651fa5bc35065de7a2274e21bc20e9
<<<<<<< bf8f52ea20882d8f4170d14634f2158b9c2dcf10
=======
let config = require('./db.config.js')
>>>>>>> Deploy fixes
=======
>>>>>>> deployment errors
=======
=======
let config = require('./db.config.js')
>>>>>>> Deploy fixes
>>>>>>> Deploy fixes

<<<<<<< 3e645bc7942392e12b11c12d03b4a34b4f889cc4
<<<<<<< d7af8130c6248c7501cea2deb90216b9b657a5be
=======
<<<<<<< dbaf5414371c9deb4dc2767edd900503bb36fa92
>>>>>>> Deploying
var knex = require('knex')({
 client: 'mysql',
 connection: {
   host     : process.env.ip || config.ip,
   user     : process.env.username || config.username,
   password : process.env.password || config.password,
   database : process.env.database || config.name
 }
<<<<<<< 3e645bc7942392e12b11c12d03b4a34b4f889cc4
<<<<<<< 71ef351ded24b9e61b09497f2176d37e12e159db
=======
<<<<<<< 1c237a58f1bdc8cc323865f173d6ca43135f54c7
=======
=======
>>>>>>> Deploying
let knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.ip || config.ip,
    user     : process.env.username || config.username,
    password : process.env.password || config.password,
    database : process.env.database || config.name
  }
>>>>>>> Deploying
<<<<<<< 3e645bc7942392e12b11c12d03b4a34b4f889cc4
=======
// let config = require('./db.config.js')
=======
let config = require('./db.config.js')
>>>>>>> Deploy fixes

let knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.ip || config.ip,
    user     : process.env.username || config.username,
    password : process.env.password || config.password,
    database : process.env.database || config.name
  }
>>>>>>> deployment errors
>>>>>>> deployment errors
=======
>>>>>>> Deploying
});
=======
>>>>>>> Adding changes to db.js


var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('users', user => {
      user.increments('id').primary();
      user.string('fullName');
      user.string('email');
      user.string('password')
      user.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});


db.knex.schema.hasTable('bookings').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('bookings', booking => {
      booking.increments('id').primary();
      booking.string('type');
      booking.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});


db.knex.schema.hasTable('itineraries').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('itineraries', itinerary => {
      itinerary.increments('id').primary();
      itinerary.integer('user_id').unsigned();
      itinerary.foreign('user_id').references('id').inTable('users');
      itinerary.integer('booking_id').unsigned();
      itinerary.foreign('booking_id').references('id').inTable('bookings');
      itinerary.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});


db.knex.schema.hasTable('statuses').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('statuses', status => {
      status.increments('id').primary();
      status.string('type');
      status.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});


db.knex.schema.hasTable('hotelResp').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('hotelResp', hotel => {
      hotel.increments('id').primary();
      hotel.integer('reservationId');
      hotel.string('name');
      hotel.string('address');
      hotel.string('telephone');
      hotel.integer('days');
      hotel.string('checkinTime');
      hotel.string('checkoutTime');
      hotel.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
// export default db;
