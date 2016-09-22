let config = require('./db.config.js')

let knex = require('knex')({
  client: 'mysql',
  connection: {
    // host     : config.ip,
    // user     : process.env.username || config.username,
    // password : process.env.password || config.password,
    // database : process.env.database || config.name,
    host: 'mysqlcluster10.registeredsite.com',
    user: 'diamondadmin',
    password: '!Qaz2wsx3edc',
    database: 'supernovamks',
    charset  : 'utf8'
  }
});

let db = require('bookshelf')(knex);

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
