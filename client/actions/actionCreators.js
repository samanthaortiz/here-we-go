import axios from 'axios';
import { browserHistory } from 'react-router';
//fire off actions 
//actions are just objects

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.

//=============== HOTELS ===============
export const postHotelExpedia = (location, startDate, endDate) => {

  // console.log(location, startDate, endDate);
  return function(dispatch){
    return axiosHotelCall(location, startDate, endDate)
    .then(res => {
      // console.log("HERE HERE HERE -- HOTELS", res.data);
      dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
      browserHistory.push('/dashboard')

    })
    .catch(error => console.log(error));
  };
};

export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
  return {
    type: 'POST_HOTEL_EXPEDIA',
    expediaHotelInfo,
    location,
    startDate,
    endDate
  };
}


export function axiosHotelCall(location, startDate, endDate){
  return axios.post('/api/hotelsearch', {
      location,
      startDate,
      endDate
    });
}


//=============== FLIGHTS ===============

//GET AIRPORT CODE FOR FLIGHT SEARCH

export const getFlightCode = (locationForFlightSearch) => {
  console.log('LOCATIONForFlightSearch', locationForFlightSearch);
  return function(dispatch){
    return axiosFlightCode(locationForFlightSearch)
    .then(res => {
    // console.log('Flight Code Received', res.data)
     console.log('locationForFlightSearch to hydrate store', locationForFlightSearch);
     dispatch(hydrateFlightStoreCode(res.data, locationForFlightSearch))
    });
  }
}

export function hydrateFlightStoreCode(expediaFlightInfo, locationForFlightSearch){
  return {
    type: 'GET_FLIGHT_CODE',
    expediaFlightInfo,
    locationForFlightSearch
    // startDate,
    // endDate
  };
}

export function axiosFlightCode(locationForFlightSearch){
  console.log('in axios call, locationForFlightSearch is:', locationForFlightSearch)
  return axios.post('/api/FlightCode', {
      locationForFlightSearch
    });
}


//POST REQ TO EXPEDIA TO SEARCH FOR FLIGHTS BY AIRPORT CODE AND DATES

export const postFlightExpedia = (departureAirport, destinationAirport, startDate, endDate) => {
  // console.log('POST FLIGHT EXPEDIA!', departureAirport, destinationAirport, startDate, endDate);
  return function(dispatch){
    return axiosFlightCall(departureAirport, destinationAirport, startDate, endDate)
    .then(res => {
      // console.log('SUBMISSION TO EXPEDIA FLIGHTS', startDate, endDate, departureAirport, destinationAirport, res.data)
      dispatch(hydrateFlightStoreExpedia(res.data, departureAirport, destinationAirport, startDate, endDate))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightCall(departureAirport, destinationAirport, startDate, endDate){
  return axios.post('/api/FlightSearch', {
      departureAirport: departureAirport,
      destinationAirport: destinationAirport,
      startDate: startDate,
      endDate: endDate
    });
}

export function hydrateFlightStoreExpedia(expediaFlightInfo, departureAirport, destinationAirport, startDate, endDate){
  return {
    type: 'POST_FLIGHT_EXPEDIA',
    expediaFlightInfo,
    departureAirport,
    destinationAirport,
    startDate,
    endDate
  };
}