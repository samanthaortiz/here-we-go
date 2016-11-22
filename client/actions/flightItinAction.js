import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== FLIGHTS ITIN ===============

export const postFlightItin = (email, location) => {
  console.log('getting all the flight itins')
  return function(dispatch){
    return axiosFlightItin(email)
    .then(res => {
      console.log('now dispatching flight itins', res.data)
      dispatch(hydrateFlightItin(res.data))
      browserHistory.push(location)
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