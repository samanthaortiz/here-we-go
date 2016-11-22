import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== TRIP DATA ===============

export const postTripData = (location, startDate, endDate, email, loggedIn) => {
  console.log('in first step', location, startDate, endDate, email, loggedIn)
  return function(dispatch) {
    console.log('about to dispatch')
    return axiosTripCall(location, startDate, endDate)
    .then(res => {
      console.log('response data after getting trip info:', res.data)
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
  console.log('in axios:', location, startDate, endDate)
  return axios.post('/api/trips', {
    location,
    startDate,
    endDate
  });
};