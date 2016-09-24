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
      location: location,
      startDate: startDate,
      endDate: endDate
    });
}


//=============== FLIGHTS ===============
// export const postFlightExpedia = (location, startDate, endDate) => {
//   console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosFlightCall(location, startDate, endDate)
//     .then(res => {
//       // console.log("HERE HERE HERE -- FLIGHTS", res.data);
//       dispatch(hydrateFlightStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateFlightStore(expediaFlightInfo, location, startDate, endDate){
//   return {
//     type: 'POST_FLIGHT_EXPEDIA',
//     expediaFlightInfo,
//     location,
//     startDate,
//     endDate
//   };
// }


// export function axiosFlightCall(location, startDate, endDate){
//   return axios.post('/api/flightSearch', {
//       location: location,
//       startDate: startDate,
//       endDate: endDate
//     });
// }
