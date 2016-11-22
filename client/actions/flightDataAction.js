import axios from 'axios';
import { browserHistory } from 'react-router';

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