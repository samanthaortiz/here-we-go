<<<<<<< 46aa03c71bcf0219eac258ef4bb280bb820c4291
<<<<<<< 9c19c74fedd7a91c48d72bc2dee151e85b309639
var config = require('./db.config.js')
=======
// let config = require('./db.config.js')
>>>>>>> deployment errors
=======
let config = require('./db.config.js')
>>>>>>> Deploy fixes

<<<<<<< d7af8130c6248c7501cea2deb90216b9b657a5be
var knex = require('knex')({
 client: 'mysql',
 connection: {
   host     : process.env.ip || config.ip,
   user     : process.env.username || config.username,
   password : process.env.password || config.password,
   database : process.env.database || config.name
 }
=======
let knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.ip || config.ip,
    user     : process.env.username || config.username,
    password : process.env.password || config.password,
    database : process.env.database || config.name
  }
>>>>>>> Deploying
});


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
