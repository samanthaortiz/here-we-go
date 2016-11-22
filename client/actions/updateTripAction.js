import axios from 'axios';
import { browserHistory } from 'react-router';

//==================== UPDATING TRIP ID =======================================

export const updateTripId = (tripId, itemId, typeId) => {
  return function(dispatch){
    return axiosUpdateTripId(tripId, itemId, typeId)
    .then(res => {
      dispatch(hydrateUpdateTripId(res.data, tripId, itemId, typeId))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosUpdateTripId(tripId, itemId, typeId){
  return axios.post('/api/updateTripId', {
    tripId, 
    itemId, 
    typeId
  })
}

export function hydrateUpdateTripId(updatedInfo, tripId, itemId, typeId){
  return {
   type: "UPDATE_TRIP_ID",
   updatedInfo,
   tripId, 
   itemId, 
   typeId
  };
}