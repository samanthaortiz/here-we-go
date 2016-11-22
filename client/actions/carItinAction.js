import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== CARS ITIN ===============

export const postCarItin = (email, location) => {
  return function(dispatch){
    return axiosCarItin(email)
    .then(res => {
      dispatch(hydrateCarItin(res.data))
      browserHistory.push(location)
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