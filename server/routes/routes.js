var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');
var Users = require('../database/models/User')
var All = require('../../client/data/fullAirportList');
var Valid = require('../../client/data/validFlightCodes');
let hotelRoute = require('./hotelApi')
let flightRoute = require('./flightApi')
let carRoute = require('./carApi')
let activityRoute = require('./activityApi')
var siftInfo = require('../server');
var siftConfig = require('./config/siftConfig');



//PASSPORT GOOGLE AUTHENTICATION
var passport = require('passport');


router.get('/auth/google',
  passport.authenticate('google', { scope: ['openid email profile'], accessType: 'offline'  }));


router.get('/auth/google/callback',
  passport.authenticate('google', { 
    successRedirect: "https://api.easilydo.com/v1/connect_email?api_key=" + siftConfig.sift.API_KEY + "&username=eroussopoulos@gmail.com" + "&token=5065399dc833fabebfa3fd5d978b3c25&redirect_url=http://localhost:4000/"

    //siftInfo.siftInfo.connectToken
    // failureRedirect: '/auth/google/failure'
  }),
  function(req, res) {
    console.log('RESPONSE GOING TO SPLASH PAGE');
    res.redirect('/');
  }
);

// router.get('/auth/google/callback', function(req, res) {
//   // passport.authenticate('google', { 
//     res.redirect(";
//     console.log('>>>> REDIRECTED <<<<')
//   // }
// });

router.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    //add msql connection 
    user: req.user
  });
}); 

// router.get('/logout', function(req, res) {
//   req.logOut();
//   res.redirect('/');
// });
  var url = require('url');

router.get('/logout', function (req, res, next){
  req.logout();
  res.redirect('https://accounts.google.com/logout')
});

// router.get('/logout', function(req, res) {
//     res.redirect('/');
// });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google/');
}

// DB ================================================================================ */
// GET USERNAME
router.post('/user-account/', function(req, res) {
  db.knex.select('*')
  .from('users')
  .where({'google_id': req.query.google_id})
  .then(function(user) {
    res.send(user);
  })
  .catch(function(error) {
    console.error(error)
  });
});

// router.get('/user-account', function (req, res) {
//   Users.fetch()
//     .then(function(user) {
//       console.log("SUCCESS: ", user);
//       res.send(user);
//     });
// });



// TRIP/FLIGHT SEARCH API =====================================================================
router.post("/FlightSearch", function(req, res) {
  // console.log('>> ENTER FLIGHT API ROUTER ', req.body);

  var urlAPI =  "http://terminal2.expedia.com:80/x/mflights/search?departureDate="+req.body.startDate+"&returnDate="+req.body.endDate+"&departureAirport="+req.body.departureAirport+"&arrivalAirport="+req.body.destinationAirport+"&prettyPrint=true&numberOfAdultTravelers="+req.body.adults+"&maxOfferCount=20&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767"

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('flight request from expedia response', response.body);
      res.send(body);
    } else {
      console.error(error)
    }
  });
});

router.post('/trips', hotelRoute, carRoute, activityRoute, flightRoute.getFlightCode, function(req, res, next) {
  res.send(res.data);
});


// // HOTEL SEARCH API ================================================================== */
// router.post("/HotelSearch", function(req, res) {
//   console.log('>> ENTER HOTEL API ROUTER ', req.body);

//   var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // console.log('Hotel Response Body', body);
//       res.send(body);
//     }
//   });
// });

// // FLIGHT SEARCH API ================================================================= */

// router.post("/FlightSearch", function(req, res) {
//   console.log('>> ENTER FLIGHT API ROUTER ', req.body);

//   var urlAPI =  "http://terminal2.expedia.com:80/x/mflights/search?departureDate="+req.body.startDate+"&returnDate="+req.body.endDate+"&departureAirport="+req.body.departureAirport+"&arrivalAirport="+req.body.destinationAirport+"&prettyPrint=true&numberOfAdultTravelers="+req.body.adults+"&maxOfferCount=20&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767"
//     //   request({ url: urlAPI }, function(error, response, body) {
//     //     if (!error && response.statusCode == 200) {
//     //       res.send(body);
//     //     }
//     //   });
//     // });

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log('flight request from expedia response', response.body);
//       res.send(body);
//     } else {
//       console.error(error)
//     }
//   });
// });

// // AIRPORT CODE SEARCH API ================================================================= */
// router.post("/FlightCode", function(req, res) {
//   console.log('>> ENTER FLIGHT CODE API ROUTER ', req.body);
//   // console.log('REQUEST IN FLIGHT CODE', req)
//   // console.log('REQUEST/ IN FLIGHT CODE:', req.body)
//   var urlAPI = 'https://iatacodes.org/api/v6/autocomplete?query='+req.body.locationForFlightSearch+'&api_key='+api.flightCode;

//   request({ url: urlAPI }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log('>>>>>> ', response.body);
//       res.send(response.body);
//     }
//   });
// });




// ////////////TEST APIS/////////////

// // router.post('/hotel-resp/', function(req, res) {
// //   console.log("REQBODY", req.body)
// //   db.knex.insert({'dummyInfo': JSON.stringify(req.body.result.hotel)})
// //   .into('dummyHotel')
// //   .then(function(info) {
// //     console.log("DUMMYINFO", info)
// //     res.send(info);
// //   })
// //   .catch(function(error) {
// //     console.error(error)
// //   });
// // });


// // router.get('/airport-list/', function(req, res){
// //     var all = [];
// //     All.forEach(function(airport){
// //       if(Valid.indexOf(airport.code) !== -1){
// //         all.push(airport);
// //       }
// //     })
// //     var selectableAirports = all.map(function(airport, i){
// //       return airport.name
// //     });
// //     console.log(selectableAirports);
// //   res.send(selectableAirports)
// // });

// // CAR RENTAL SEARCH API ============================================================= */
// router.post('/carRentalSearch', function(req, res) {
//   console.log('>> ENTER CAR RENTAL API ROUTER ', req.body);
  
//   // var urlAPI = 'http://terminal2.expedia.com:80/x/cars/search?pickupdate='+req.body.pickUpDate+'&dropoffdate='+req.body.dropOffDate+'&pickuplocation=JFK&dropofflocation=JFK&limit=10&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767'

//   // var TEST_URL = 'http://terminal2.expedia.com:80/x/cars/search?pickupdate=2016-10-15&dropoffdate=2016-10-30&pickuplocation=JFK&dropofflocation=JFK&limit=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767'

//   var TEST_RESPONSE = {
//   "CarCount": "2",
//   "CarInfoList": {
//     "CarInfo": [
//       {
//         "CarMakeModel": "Hyundai Accent",
//         "CarClass": "Economy 2/4Door Car",
//         "CarDoorCount": {
//           "Min": "4",
//           "Max": "4"
//         },
//         "TransmissionDriveCode": "1",
//         "FuelACCode": "1",
//         "FuelInfo": "1",
//         "ACRISSCategoryCode": "E",
//         "ACRISSTypeCode": "C",
//         "ACRISSTransmissionDriveCode": "A",
//         "ACRISSFuelACCode": "R",
//         "SupplierID": "38",
//         "SupplierName": "Payless",
//         "PIID": "AQAQAQJhg2IMrPAyjKzwMw1st5OLb0ekABSAFQqKkBkAHWLpgB5aMEsAED",
//         "PickupInfo": {
//           "DateTime": "2016-10-15T10:30:00",
//           "Location": {
//             "ID": "59338",
//             "Name": "Jamaica",
//             "Code": "JFK",
//             "LocationID": "JFKT001",
//             "ShuttleCategory": "ShuttleToCounter",
//             "StreetAddress": "305 Federal Circle, John F Kennedy Intl Airport",
//             "City": "Jamaica",
//             "Province": "NY",
//             "Country": "USA",
//             "Distance": {
//               "UnitCount": "2.627",
//               "Unit": "KM"
//             },
//             "GeoLocation": {
//               "Latitude": "40.660623",
//               "Longitude": "-73.804853"
//             }
//           }
//         },
//         "DropOffInfo": {
//           "DateTime": "2016-10-30T10:30:00",
//           "Location": {
//             "ID": "59338",
//             "Name": "Jamaica",
//             "Code": "JFK",
//             "LocationID": "JFKT001",
//             "StreetAddress": "305 Federal Circle, John F Kennedy Intl Airport",
//             "City": "Jamaica",
//             "Province": "NY",
//             "Country": "USA",
//             "Distance": {
//               "UnitCount": "2.627",
//               "Unit": "KM"
//             },
//             "GeoLocation": {
//               "Latitude": "40.660623",
//               "Longitude": "-73.804853"
//             }
//           }
//         },
//         "Capacity": {
//           "AdultCount": "5",
//           "ChildCount": "0",
//           "SmallLuggageCount": "2",
//           "LargeLuggageCount": "1"
//         },
//         "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQJhg2IMrPAyjKzwMw1st5OLb0ekABSAFQqKkBkAHWLpgB5aMEsAED&totalprice=627.19&currency=USD&styp=1&locn=JFK&dtyp=1&loc2=JFK&date1=10%2F15%2F2016&date2=10%2F30%2F2016&time1=1030&time2=1030&partnername=Hackathon",
//         "RatePeriodCode": "Weekly",
//         "Price": {
//           "RatePeriodUnitPrice": {
//             "Value": "195.26",
//             "Currency": "USD"
//           },
//           "BaseRate": {
//             "Value": "390.52",
//             "Currency": "USD"
//           },
//           "TotalRate": {
//             "Value": "627.19",
//             "Currency": "USD"
//           }
//         },
//         "PrePay": "false",
//         "CreditCardRequired": "false",
//         "CarRate": {
//           "RateCode": "WK"
//         },
//         "Mileage": {
//           "FreeDistance": {
//             "UnitCount": "-1"
//           }
//         },
//         "ThumbnailUrl": "https://images.trvl-media.com/cars/38/ZA_USA_Hyundai_Accent_EC_20160607_t.jpg"
//       },
//       {
//         "CarMakeModel": "Nissan Versa",
//         "CarClass": "Compact 2/4Door Car",
//         "CarDoorCount": {
//           "Min": "4",
//           "Max": "4"
//         },
//         "TransmissionDriveCode": "1",
//         "FuelACCode": "1",
//         "FuelInfo": "1",
//         "ACRISSCategoryCode": "C",
//         "ACRISSTypeCode": "C",
//         "ACRISSTransmissionDriveCode": "A",
//         "ACRISSFuelACCode": "R",
//         "SupplierID": "38",
//         "SupplierName": "Payless",
//         "PIID": "AQAQAQJhghIMrPAyjKzwMw1st5OLb0ekABSAFQqKkBkAHWLpgB5aMEsAED",
//         "PickupInfo": {
//           "DateTime": "2016-10-15T10:30:00",
//           "Location": {
//             "ID": "59338",
//             "Name": "Jamaica",
//             "Code": "JFK",
//             "LocationID": "JFKT001",
//             "ShuttleCategory": "ShuttleToCounter",
//             "StreetAddress": "305 Federal Circle, John F Kennedy Intl Airport",
//             "City": "Jamaica",
//             "Province": "NY",
//             "Country": "USA",
//             "Distance": {
//               "UnitCount": "2.627",
//               "Unit": "KM"
//             },
//             "GeoLocation": {
//               "Latitude": "40.660623",
//               "Longitude": "-73.804853"
//             }
//           }
//         },
//         "DropOffInfo": {
//           "DateTime": "2016-10-30T10:30:00",
//           "Location": {
//             "ID": "59338",
//             "Name": "Jamaica",
//             "Code": "JFK",
//             "LocationID": "JFKT001",
//             "StreetAddress": "305 Federal Circle, John F Kennedy Intl Airport",
//             "City": "Jamaica",
//             "Province": "NY",
//             "Country": "USA",
//             "Distance": {
//               "UnitCount": "2.627",
//               "Unit": "KM"
//             },
//             "GeoLocation": {
//               "Latitude": "40.660623",
//               "Longitude": "-73.804853"
//             }
//           }
//         },
//         "Capacity": {
//           "AdultCount": "5",
//           "ChildCount": "0",
//           "SmallLuggageCount": "2",
//           "LargeLuggageCount": "1"
//         },
//         "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQJhghIMrPAyjKzwMw1st5OLb0ekABSAFQqKkBkAHWLpgB5aMEsAED&totalprice=632.53&currency=USD&styp=1&locn=JFK&dtyp=1&loc2=JFK&date1=10%2F15%2F2016&date2=10%2F30%2F2016&time1=1030&time2=1030&partnername=Hackathon",
//         "RatePeriodCode": "Weekly",
//         "Price": {
//           "RatePeriodUnitPrice": {
//             "Value": "197.08",
//             "Currency": "USD"
//           },
//           "BaseRate": {
//             "Value": "394.16",
//             "Currency": "USD"
//           },
//           "TotalRate": {
//             "Value": "632.53",
//             "Currency": "USD"
//           }
//         },
//         "PrePay": "false",
//         "CreditCardRequired": "false",
//         "CarRate": {
//           "RateCode": "WK"
//         },
//         "Mileage": {
//           "FreeDistance": {
//             "UnitCount": "-1"
//           }
//         },
//         "ThumbnailUrl": "https://images.trvl-media.com/cars/38/ZA_USA_Nissan_Versa_CC_20160607_t.jpg"
//       }
//     ]
//   }
// }
// res.send(TEST_RESPONSE);


// ACTIVITIES SEARCH API ================================================================== 
router.post("/ActivitiesSearch", function(req, res) {
  // console.log('>> ENTER ACTIVITIES API ROUTER ', req.body);

  var urlAPI = 'http://terminal2.expedia.com:80/x/activities/search?location='+req.body.location+'&startDate='+req.body.startDate+'&endDate='+req.body.endDate+'&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767'

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('Hotel Response Body', body);
      res.send(body);
    }
  });
});




  // request({ url: TEST_URL }, function(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log('CAR RENTAL RESPONSE: ', body);
  //     res.send(body);
  //   }
  // });



module.exports = router;
