var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'ellie',
    password : 'ellie',
    database : 'herewego',
    charset  : 'utf8'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username');
      user.string('fullName');
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});


db.knex.schema.hasTable('bookings').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('bookings', function (booking) {
      booking.increments('id').primary();
      booking.string('type');
      booking.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});


db.knex.schema.hasTable('itineraries').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('itineraries', function (itinerary) {
      itinerary.increments('id').primary();
      itinerary.integer('user_id').references(user.id);
      itinerary.integer('booking_id').references(booking.id);
      itinerary.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
