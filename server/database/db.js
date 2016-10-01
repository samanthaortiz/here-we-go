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
      user.string('accessToken');
      user.string('refreshToken');
      user.string('fullName');
      user.string('email');
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
      hotel.string('providerName');
      hotel.string('address_line1');
      hotel.string('address_line2');
      hotel.string('address_line3');
      hotel.string('city');
      hotel.string('state');
      hotel.string('zip');
      hotel.string('telephone');
      hotel.integer('days');
      hotel.date('startDate');
      hotel.date('endDate');
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
      flight.string('terminal');
      flight.string('airportName');
      flight.string('airportCode');
      flight.string('airportCity');
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

 knex.schema.hasTable('itineraries').then(exists => {
  if (!exists) {
     knex.schema.createTable('itineraries', itinerary => {
      itinerary.increments('id').primary();
      itinerary.string('user_id');
      itinerary.foreign('user_id').references('google_id').inTable('users');
      itinerary.string('status');
      itinerary.integer('trip_id');
      itinerary.timestamps();
    }).then(table => {
      console.log('Created Table', table);
    });
  }
})
 
//  knex.schema.hasTable('dummyHotel').then(exists => {
//   if (!exists) {
//      knex.schema.createTable('dummyHotel', hotel => {
//             hotel.increments('id').primary();
//             hotel.string('dummyInfo');
//           }).then(table => {
//             console.log('Created Table', table);
//     });
//   }
// }),

  ])

DB.plugin('registry');
module.exports = DB;
// export default db;
