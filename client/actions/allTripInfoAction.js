import axios from 'axios';
import { browserHistory } from 'react-router';

//==================== GETTING TRIP INFO FROM ALL TABLES =======================================

export const getAllTripInfo = (tripId, location) => {
  return function(dispatch){
    return axiosAllTripInfo(tripId)
    .then(res => {
      dispatch(hydrateAllTripInfo(res.data, tripId))
      console.log(">>>>TRIPDATA", res.data)
      browserHistory.push(location)
    })
    .catch(error => console.log(error));
  };
};

export function axiosAllTripInfo(tripId){
  return axios.post('/api/getAllTripInfo', {
    tripId
  })
};

export function hydrateAllTripInfo(allTripInfo, tripId){
  return {
   type: "GET_ALL_TRIP_INFO",
   allTripInfo,
   tripId
  };
};