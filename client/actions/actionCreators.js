import axios from 'axios';
//fire off actions 

//find info?

//actions are just objects

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.
export const postExpedia = (location, startDate, endDate) => {
  console.log(location, startDate, endDate);
  return function(dispatch){
    return axiosCall(location, startDate, endDate)
    .then(data => {
      console.log("HERE HERE HERE", data);
      //dispatch(hydrateStore(data.location, data.startDate, data.endDate)))
    })
    .catch(error => console.log(error));
  };
};

export function hydrateStore(location, startDate, endDate){
  return {
    type: 'POST_EXPEDIA',
    location,
    startDate,
    endDate
  };
}


export function axiosCall(location, startDate, endDate){
  return axios.post('/api/hotelsearch', {
      location: location,
      startDate: startDate,
      endDate: endDate
    });
}


// function receiveData(json) {
//   return{
//     type: 'RECV_DATA',
//     data: json
//   }
// }

// function receiveError(json) {
//   return {
//     type: 'RECV_ERROR',
//     data: json
//   }
// }

// export function fetchData(url) {
//   return function(dispatch) {
//     dispatch(postExpedia(location, startDate, endDate));
//     return axios({
//       url: url,
//       method: 'post',
//       responseType: 'json'
//     })
//       .then(function(response) {
//         dispatch(receiveData(response.data));
//       })
//       .catch(function(response){
//         dispatch(receiveError(response.data));
//         console.log('error on post req', response.data);
//       })
//   }
// };