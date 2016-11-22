import axios from 'axios';
import { browserHistory } from 'react-router';

//==================== ADDING NEW TRIP =======================================

export const postNewTrip = (tripName, email) => {
  return function(dispatch){
    return axiosNewTrip(tripName, email)
    .then(res => {
      console.log('response data in post new trip', res)
      dispatch(hydrateNewTrip(res.data, tripName, email))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosNewTrip(tripName, email){
  return axios.post('/api/newTrip', {
    tripName,
    email
  })
}

export function hydrateNewTrip(newTripInfo, tripName, email){
  return {
   type: "POST_NEW_TRIP",
   newTripInfo,
   tripName,
   email
  };
}
