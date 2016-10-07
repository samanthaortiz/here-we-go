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

//=============== HOTEL ITIN ===============

export const postHotelItin = (email) => {
  return function(dispatch){
    return axiosHotelItin(email)
    .then(res => {
      dispatch(hydrateHotelItin(res.data))
      browserHistory.push('/')
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

export function hydrateHotelItin(hotelItinData){
  return {
    type: "POST_HOTEL_ITIN",
    hotelItinData,
  };
};

//=============== FLIGHTS ITIN ===============

export const postFlightItin = (email) => {
  return function(dispatch){
    return axiosFlightItin(email)
    .then(res => {
      dispatch(hydrateFlightItin(res.data))
      browserHistory.push('/')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightItin(email){
  console.log('posting email req', email)
  return axios.post('/api/flightItin', {
    email
  })
}

export function hydrateFlightItin(flightItinData){
  return {
    type: "POST_FLIGHT_ITIN",
    flightItinData
  };
  }

//=============== CARS ITIN ===============
export const postCarItin = (email) => {
  return function(dispatch){
    return axiosCarItin(email)
    .then(res => {
      dispatch(hydrateCarItin(res.data))
      browserHistory.push('/')
    })
    .catch(error => console.log(error));
  };
};

export function axiosCarItin(email){
  return axios.post('/api/carItin', {
    email
  })
}

export function hydrateCarItin(carItinData){
  return {
    type: "POST_CAR_ITIN",
    carItinData
  };
}


//=============== ACTIVITY ITIN ===============
export const postActivityItin = (email) => {
  return function(dispatch){
    return axiosActivityItin(email)
    .then(res => {
      dispatch(hydrateActivityItin(res.data))
      browserHistory.push('/')
    })
    .catch(error => console.log(error));
  };
};

export function axiosActivityItin(email){
  return axios.post('/api/activityItin', {
    email
  })
}

export function hydrateActivityItin(activityItinData){
  return {
    type: "POST_ACTIVITY_ITIN",
    activityItinData
  };
}