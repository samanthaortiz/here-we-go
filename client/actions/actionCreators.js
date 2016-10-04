import axios from 'axios';
import { browserHistory } from 'react-router';
//fire off actions 
//actions are just objects

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.

//=============== TRIP DATA ===============
export const postTripData = (location, startDate, endDate, email, loggedIn) => {
  return function(dispatch) {
    return axiosTripCall(location, startDate, endDate)
    .then(res => {
      dispatch(hydrateTripStore(res.data, location, startDate, endDate, email, loggedIn))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateTripStore(tripData, location, startDate, endDate, email, loggedIn){
  return {
    type: 'POST_TRIP_DATA',
    tripData,
    location,
    startDate,
    endDate,
    email,
    loggedIn
  };
}

export function axiosTripCall(location, startDate, endDate){
  return axios.post('/api/trips', {
    location,
    startDate,
    endDate
  });
};

<<<<<<< bd727bb550119863c1dc38e9607c40ca1c8ab1ad
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8

=======
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Database): User email linked to each table


// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e

<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
=======
=======
=======
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> feat(Database): User email linked to each table
=======
=======

// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }


export function axiosLogin(){
  return axios.get('/api/auth/google')
};


=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> Merge conflicts resolved
//=============== FLIGHTS ===============

//POST REQ TO EXPEDIA TO SEARCH FOR FLIGHTS BY AIRPORT CODE AND DATES

export const postFlightExpedia = (departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants) => {
  return function(dispatch){
    return axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants)
    .then(res => {
      // console.log('SUBMISSION TO EXPEDIA FLIGHTS', startDate, endDate, departureAirport, destinationAirport, res.data)
      dispatch(hydrateFlightStoreExpedia(res.data, departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants){
  return axios.post('/api/FlightSearch', {
      departureAirport: departureAirport,
      destinationAirport: destinationAirport,
      startDate: startDate,
      endDate: endDate,
      adults: adults,
      childUnder18: childUnder18,
      infants: infants
    });
}

export function hydrateFlightStoreExpedia(expediaFlightInfo, departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants){
  return {
    type: 'POST_FLIGHT_EXPEDIA',
    expediaFlightInfo,
    departureAirport,
    destinationAirport,
    startDate,
    endDate,
    adults,
    childUnder18,
    infants
  };
}

//=============== DB DATA ===============
export const postHotelItin = (email) => {
  return function(dispatch){
    return axiosHotelItin(email)
    .then(res => {
      console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateHotelItin(res.data, email))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosHotelItin(email){
  console.log('posting email req', email)
  return axios.post('/api/hotelItin', {
    email
  })
}

export function hydrateHotelItin(hotelItinData, email){
  console.log();
  return {
    type: "POST_HOTEL_ITIN",
    hotelItinData,
    email
  };
}