import axios from 'axios';
import { browserHistory } from 'react-router';

//======================= GET ALL EXISTING TRIPS ==============================

export const getAllTrips = (email, location) => {
  return function(dispatch){
    return axiosGetTrips(email)
    .then(res => {
      console.log('response data in get all trips', res.data)
      dispatch(hydrateAllTrips(res.data, email))
      browserHistory.push(location)
    })
    .catch(error => console.log(error));
  };
};

export function axiosGetTrips(email){
  return axios.post('/api/getAllTrips', {
    email
  })
}

export function hydrateAllTrips(allTripInfo, email){
  return {
   type: "GET_ALL_TRIPS",
   allTripInfo,
   email
  };
}