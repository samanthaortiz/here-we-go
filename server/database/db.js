<<<<<<< f708f936f8ea9a6d66d304afe1ee79480be6ed77
<<<<<<< 718739ec2db101ba7df3dbe687a2d75f9e5e25e7
<<<<<<< 5533399cc687aea2909c9263605dcfff1aa289d6
<<<<<<< 1d4e8afaaed045e12a21a2d40da59aa350eec703
<<<<<<< 5784f7964b50b4ce9c31868f850e9845d72b2629
=======
=======
<<<<<<< 1eac9b3e273ec7b646c1609e8ae25a3f6efb605f
>>>>>>> Deploy fixes
<<<<<<< daaaf97ba45558d68a36166d9e03541998b6e730
>>>>>>> deployment errors
=======
>>>>>>> Adding changes to db.js
var config = require('./db.config.js')
=======
// let config = require('./db.config.js')
>>>>>>> deployment errors
=======
let config = require('./db.config.js')
>>>>>>> Deploy fixes

<<<<<<< dbaf5414371c9deb4dc2767edd900503bb36fa92
var knex = require('knex')({
 client: 'mysql',
 connection: {
   host     : process.env.ip || config.ip,
   user     : process.env.username || config.username,
   password : process.env.password || config.password,
   database : process.env.database || config.name
 }
<<<<<<< f708f936f8ea9a6d66d304afe1ee79480be6ed77
=======
<<<<<<< 5533399cc687aea2909c9263605dcfff1aa289d6
let knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.ip || config.ip,
    user     : process.env.username || config.username,
    password : process.env.password || config.password,
    database : process.env.database || config.name
  }
>>>>>>> Deploying
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
