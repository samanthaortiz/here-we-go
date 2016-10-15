// var config = require('./db.config.js') || {}

var knex = require('knex')({
 client: 'mysql',
 connection: {
   host     : process.env.ip ,
    //|| config.ip,
   user     : process.env.username,
    //|| config.username,
   password : process.env.password,
    //|| config.password,
   database : process.env.database,
    //|| config.name
 }
});

var DB = require('bookshelf')(knex);

Promise.all([
knex.schema.hasTable('users').then(exists => {
  if (!exists) {
     knex.schema.createTable('users', user => {
      user.increments('id').primary();
      user.string('google_id').unique();
      user.string('accessToken');
      user.string('refreshToken');
      user.string('fullName');
      user.string('email').unique();
      user.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

 knex.schema.hasTable('hotelReservations').then(exists => {
  if (!exists) {
     knex.schema.createTable('hotelReservations', hotel => {
      hotel.increments('id').primary();
      hotel.integer('trip_id').unsigned();
      hotel.foreign('trip_id').references('id').inTable('itineraries');
      hotel.integer('status_id').unsigned();
      hotel.foreign('status_id').references('id').inTable('statuses');
      hotel.integer('type_id').unsigned();
      hotel.foreign('type_id').references('id').inTable('types');
      hotel.integer('sift_id');
      hotel.string('user_email');
      hotel.foreign('user_email').references('email').inTable('users');
      hotel.string('providerName');
      hotel.string('address');
      hotel.string('telephone');
      hotel.integer('days');
      hotel.dateTime('startDate');
      hotel.dateTime('endDate');
      hotel.string('organization');
      hotel.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

  knex.schema.hasTable('flightReservations').then(exists => {
  if (!exists) {
     knex.schema.createTable('flightReservations', flight => {
      flight.increments('id').primary();
      flight.integer('trip_id').unsigned();
      flight.foreign('trip_id').references('id').inTable('itineraries');
      flight.integer('status_id').unsigned();
      flight.foreign('status_id').references('id').inTable('statuses');
      flight.integer('type_id').unsigned();
      flight.foreign('type_id').references('id').inTable('types');
      flight.integer('sift_id')
      flight.string('user_email');
      flight.foreign('user_email').references('email').inTable('users');
      flight.string('terminal');
      flight.string('departureAirportName');
      flight.string('departureAirportCode');
      flight.string('departureAirportCity');
      flight.string('arrivalAirportName');
      flight.string('arrivalAirportCode');
      flight.string('arrivalAirportCity');
      flight.string('airline');
      flight.string('flightNumber');
      flight.string('ticketNumber');
      flight.string('seatType');
      flight.integer('seatRow');
      flight.string('seatNumber');
      flight.string('membershipNumber');
      flight.string('broker');
      flight.dateTime('departureTime');
      flight.dateTime('arrivalTime');
      flight.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

knex.schema.hasTable('trainReservations').then(exists => {
  if (!exists) {
     knex.schema.createTable('trainReservations', train => {
      train.increments('id').primary();
      train.integer('trip_id').unsigned();
      train.foreign('trip_id').references('id').inTable('itineraries');
      train.integer('status_id').unsigned();
      train.foreign('status_id').references('id').inTable('statuses');
      train.integer('type_id').unsigned();
      train.foreign('type_id').references('id').inTable('types');
      train.integer('sift_id')
      train.string('user_email');
      train.foreign('user_email').references('email').inTable('users');
      train.string('stationName');
      train.string('stationCode');
      train.dateTime('departureTime');
      train.dateTime('arrivalTime');
      train.string('seatDescription');
      train.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

knex.schema.hasTable('carRentals').then(exists => {
  if (!exists) {
     knex.schema.createTable('carRentals', car => {
      car.increments('id').primary();
      car.integer('trip_id').unsigned();
      car.foreign('trip_id').references('id').inTable('itineraries');
      car.integer('status_id').unsigned();
      car.foreign('status_id').references('id').inTable('statuses');
      car.integer('type_id').unsigned();
      car.foreign('type_id').references('id').inTable('types');
      car.integer('sift_id')
      car.string('user_email')
      car.foreign('user_email').references('email').inTable('users');
      car.string('vehicleType');
      car.string('vehicleBrand');
      car.string('rentalCompany');
      car.string('pickUpAddress');
      car.string('dropOffAddress');
      car.dateTime('pickUpTime');
      car.dateTime('dropOffTime');
      car.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),


 knex.schema.hasTable('statuses').then(exists => {
  if (!exists) {
     knex.schema.createTable('statuses', status => {
      status.increments('id').primary();
      status.string('statusType');
      status.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),


 knex.schema.hasTable('types').then(exists => {
  if (!exists) {
     knex.schema.createTable('types', type => {
      type.increments('id').primary();
      type.string('reservationType');
      type.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

  knex.schema.hasTable('budgets').then(exists => {
  if (!exists) {
     knex.schema.createTable('budgets', budget => {
      budget.increments('id').primary();
      budget.integer('trip_id').unsigned();
      budget.foreign('trip_id').references('id').inTable('itineraries');
      budget.integer('type_id').unsigned();
      budget.foreign('type_id').references('id').inTable('types');
      budget.string('user_email')
      budget.foreign('user_email').references('email').inTable('users');
      budget.integer('spent');
      budget.integer('budget');
      budget.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

    knex.schema.hasTable('activities').then(exists => {
  if (!exists) {
     knex.schema.createTable('activities', activity => {
      activity.increments('id').primary();
      activity.integer('trip_id').unsigned();
      activity.foreign('trip_id').references('id').inTable('itineraries');
      activity.integer('status_id').unsigned();
      activity.foreign('status_id').references('id').inTable('statuses');
      activity.integer('type_id').unsigned();
      activity.foreign('type_id').references('id').inTable('types');
      activity.string('user_email')
      activity.foreign('user_email').references('email').inTable('users');
      activity.string('name');
      activity.dateTime('date');
      activity.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
}),

 knex.schema.hasTable('itineraries').then(exists => {
  if (!exists) {
     knex.schema.createTable('itineraries', itinerary => {
      itinerary.increments('id').primary();
      itinerary.string('user_email')
      itinerary.foreign('user_email').references('email').inTable('users');
      itinerary.string('trip_name')
      itinerary.string('status');
      itinerary.integer('trip_id');
      itinerary.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
})
])

DB.plugin('registry');
module.exports = DB;
// export default db;
