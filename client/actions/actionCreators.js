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

export const postFlightExpedia = (codeArr, startDate, endDate) => {
  console.log(codeArr, startDate, endDate);
  return function(dispatch){
    return axiosFlightCall(codeArr, startDate, endDate)
    .then(res => {
      dispatch(hydrateFlightStore(res.data, codeArr, startDate, endDate))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightCall(codeArr, startDate, endDate){
  return axios.post('/api/flightSearch', {
      codeArr: codeArr,
      startDate: startDate,
      endDate: endDate
    });
}

export function hydrateFlightStoreExpedia(expediaFlightInfo, code, startDate, endDate){
  return {
    type: 'POST_FLIGHT_EXPEDIA',
    expediaFlightInfo,
    code,
    startDate,
    endDate
  };
}