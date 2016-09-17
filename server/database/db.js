let knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'ellie',
    password : 'ellie',
    database : 'herewego',
    charset  : 'utf8'
  }
});

let db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('users', user => {
      user.increments('id').primary();
      user.string('username');
      user.string('fullName');
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
      itinerary.integer('user_id').references(user.id);
      itinerary.integer('booking_id').references(booking.id);
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

export default db;
