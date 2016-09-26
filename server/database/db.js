var config = require('./db.config.js')

var knex = require('knex')({
 client: 'mysql',
 connection: {
   host     : process.env.ip || config.ip,
   user     : process.env.username || config.username,
   password : process.env.password || config.password,
   database : process.env.database || config.name
 }
});

var DB = require('bookshelf')(knex);

Promise.all([
knex.schema.hasTable('users').then(exists => {
  if (!exists) {
     knex.schema.createTable('users', user => {
      user.increments('id').primary();
      user.string('google_id');
      user.string('token');
      user.string('fullName');
      user.string('email');
      user.string('password')
      user.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),


 knex.schema.hasTable('bookings').then(exists => {
  if (!exists) {
     knex.schema.createTable('bookings', booking => {
      booking.increments('id').primary();
      booking.string('type');
      booking.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),


 knex.schema.hasTable('itineraries').then(exists => {
  if (!exists) {
     knex.schema.createTable('itineraries', itinerary => {
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
}),


 knex.schema.hasTable('statuses').then(exists => {
  if (!exists) {
     knex.schema.createTable('statuses', status => {
      status.increments('id').primary();
      status.string('type');
      status.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),


 knex.schema.hasTable('hotelResp').then(exists => {
  if (!exists) {
     knex.schema.createTable('hotelResp', hotel => {
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
}),

 knex.schema.hasTable('dummyHotel').then(exists => {
  if (!exists) {
     knex.schema.createTable('dummyHotel', hotel => {
            hotel.increments('id').primary();
            hotel.string('dummyInfo');
          }).then(table => {
            console.log('Created Table', table);
    });
  }
})

  ])

DB.plugin('registry');
module.exports = DB;
// export default db;
