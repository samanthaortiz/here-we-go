import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== HOTEL ITIN ===============

export const postHotelItin = (email, location) => {
  return function(dispatch){
    return axiosHotelItin(email)
    .then(res => {
      dispatch(hydrateHotelItin(res.data))
      browserHistory.push(location)
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