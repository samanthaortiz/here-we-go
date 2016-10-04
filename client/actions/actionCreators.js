import axios from 'axios';
import { browserHistory } from 'react-router';
//fire off actions 
//actions are just objects

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.

//=============== TRIP DATA ===============
export const postTripData = (location, startDate, endDate, email, loggedIn) => {
  return function(dispatch) {
    return axiosTripCall(location, startDate, endDate)
    .then(res => {
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
  return axios.post('/api/trips', {
    location,
    startDate,
    endDate
  });
};

<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< 0abef1180b35c351c994ca4975047a61676d080c
<<<<<<< e7293b29502d84a390b61ce5a09808a21c9a03dc
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< 78bc001c0ca98711fa4371148788ab1b65bb8e93
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< 17a2e961d9729c0268c73b36756781a8ad3be15a
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 18543cb9b54081504ec03e90b3ba2223cd0f113a
<<<<<<< bf5c7d9c550e05e80a556bb84fed6cc745e36bb1
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
=======
=======
=======
=======
<<<<<<< bd727bb550119863c1dc38e9607c40ca1c8ab1ad
>>>>>>> Merge conflicts resolved
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
>>>>>>> feat(Database): User email linked to each table

=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Database): User email linked to each table

<<<<<<< abe9159f2bf98e8a367aeefd4884179a4fc60478
<<<<<<< b87257826dd4ae830a010ea0b2a6ba055206c281
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

=======
=======
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< 86be8d952ac520dba49004860fe8aa99823c95d0
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======

<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
>>>>>>> feat(Database): User email linked to each table
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};
=======
>>>>>>> Merge conflicts

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed

<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< 086136b4d63291f06707b5df8739a3746777c66c
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
>>>>>>> Merge conflicts resolved
=======
=======
=======
=======
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}
=======
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
>>>>>>> revert(Frontend): Frontend routing for login reversed

<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======


>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
=======
=======
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 23f41d0253ac4520f5dc54ec2e416eacb8724e60
>>>>>>> Merge conflicts resolved
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======

<<<<<<< c028e2f0c3f145c4eff0cd750a9575b509c355f0
>>>>>>> feat(Database): User email linked to each table
//=============== DATABASE DATA ===============

<<<<<<< 0b0d5e9e25cdf39754d0b54b6dece655ff2c1930
export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< 0736bc7aa328064da48aaff360ae9b690a68c607
<<<<<<< 8153ee4e373a1c219af1040cb7691b2973e84eba
<<<<<<< 4d07f2b8e197e616510f4e382e102ac5bc5ec68d
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> feat(Database): User email linked to each table
<<<<<<< bf5c7d9c550e05e80a556bb84fed6cc745e36bb1
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

=======
>>>>>>> feat(Database): User email linked to each table
=======

>>>>>>> Merge conflicts resolved
=======

>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< cac1a4bc6d44d3610c4146ac9259da7cd387c936
>>>>>>> feat(Database): User email linked to each table
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< 0b0d5e9e25cdf39754d0b54b6dece655ff2c1930
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
=======
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======

<<<<<<< e28ba6d77464595c58479854beb377373007492f
>>>>>>> feat(Database): User email linked to each table
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 78bc001c0ca98711fa4371148788ab1b65bb8e93
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed

<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 5aaccc52731c27e7d4012af743a4493a893daa61
>>>>>>> revert(Frontend): Frontend routing for login reversed

>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> Merge conflicts resolved
=======

<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< 8153ee4e373a1c219af1040cb7691b2973e84eba
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
=======

>>>>>>> Merge conflicts
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


export function axiosLogin(){
  return axios.get('/api/auth/google')
};

=======
>>>>>>> revert(Frontend): Frontend routing for login reversed

// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }


<<<<<<< ee0d9c92eeea5aac925e39c5e327578e07dbc4e5
>>>>>>> feat(Database): User email linked to each table
=======
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }


<<<<<<< 0736bc7aa328064da48aaff360ae9b690a68c607
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts resolved
=======
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 5aaccc52731c27e7d4012af743a4493a893daa61

<<<<<<< f989404c78d4f3e75884906d6cb49e83c3735850
=======
>>>>>>> Merge conflicts resolved
>>>>>>> Merge conflicts resolved
=======
>>>>>>> feat(Database): User email linked to each table

<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
>>>>>>> Merge conflicts resolved
=======
=======
<<<<<<< 4a7a99b594b6661e16ee1f69a6baa0534729cedd
=======
=======
=======
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======


>>>>>>> feat(Database): User email linked to each table
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> feat(Database): User email linked to each table
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
>>>>>>> feat(Database): User email linked to each table
<<<<<<< e7293b29502d84a390b61ce5a09808a21c9a03dc
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> Merge conflicts resolved
=======
>>>>>>> Merge conflicts
=======
=======
=======
=======
=======
=======
>>>>>>> feat(Database): User email linked to each table

// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

>>>>>>> feat(Database): User email linked to each table
<<<<<<< 0abef1180b35c351c994ca4975047a61676d080c
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> Merge conflicts resolved
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
>>>>>>> Merge conflicts resolved
=======
=======

>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
//=============== FLIGHTS ===============

//POST REQ TO EXPEDIA TO SEARCH FOR FLIGHTS BY AIRPORT CODE AND DATES

export const postFlightExpedia = (departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants) => {
  return function(dispatch){
    return axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants)
    .then(res => {
      // console.log('SUBMISSION TO EXPEDIA FLIGHTS', startDate, endDate, departureAirport, destinationAirport, res.data)
      dispatch(hydrateFlightStoreExpedia(res.data, departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants){
  return axios.post('/api/FlightSearch', {
      departureAirport: departureAirport,
      destinationAirport: destinationAirport,
      startDate: startDate,
      endDate: endDate,
      adults: adults,
      childUnder18: childUnder18,
      infants: infants
    });
}

export function hydrateFlightStoreExpedia(expediaFlightInfo, departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants){
  return {
    type: 'POST_FLIGHT_EXPEDIA',
    expediaFlightInfo,
    departureAirport,
    destinationAirport,
    startDate,
    endDate,
    adults,
    childUnder18,
    infants
  };
}

//=============== DB DATA ===============
export const postHotelItin = (email) => {
  return function(dispatch){
    return axiosHotelItin(email)
    .then(res => {
      // console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateHotelItin(res.data, email))
      browserHistory.push('/dashboard')
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

export function hydrateHotelItin(hotelItinData, email){
  console.log();
  return {
    type: "POST_HOTEL_ITIN",
    hotelItinData,
    email
  };
<<<<<<< 0abef1180b35c351c994ca4975047a61676d080c
<<<<<<< 17a2e961d9729c0268c73b36756781a8ad3be15a
<<<<<<< 18543cb9b54081504ec03e90b3ba2223cd0f113a
=======
<<<<<<< 23f41d0253ac4520f5dc54ec2e416eacb8724e60
>>>>>>> Merge conflicts resolved
}


//FLIGHTS
export const postFlightItin = (email) => {
  return function(dispatch){
    return axiosFlightItin(email)
    .then(res => {
      console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateFlightItin(res.data, email))
      browserHistory.push('/dashboard')
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

export function hydrateFlightItin(hotelItinData, email){
  console.log();
  return {
    type: "POST_FLIGHT_ITIN",
    flightItinData,
    email
  };
}

//CARS
export const postCarItin = (email) => {
  return function(dispatch){
    return axiosCarItin(email)
    .then(res => {
      console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateCarItin(res.data, email))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosCarItin(email){
  console.log('posting email req', email)
  return axios.post('/api/carItin', {
    email
  })
}

export function hydrateCarItin(CarItinData, email){
  console.log();
  return {
    type: "POST_FLIGHT_ITIN",
    flightItinData,
    email
  };
}


=======
}
>>>>>>> Merge conflicts resolved
<<<<<<< 0abef1180b35c351c994ca4975047a61676d080c
=======
}
>>>>>>> Merge conflicts resolved
=======
>>>>>>> Merge conflicts resolved
