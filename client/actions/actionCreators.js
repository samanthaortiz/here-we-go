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

//=============== FLIGHTS ===============

//POST REQ TO EXPEDIA TO SEARCH FOR FLIGHTS BY AIRPORT CODE AND DATES

export const postFlightExpedia = (departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants) => {
  return function(dispatch){
    return axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants)
    .then(res => {
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

//=============== FLIGHTS ITIN ===============

export const postFlightItin = (email, location) => {
  return function(dispatch){
    return axiosFlightItin(email)
    .then(res => {
      dispatch(hydrateFlightItin(res.data))
      browserHistory.push(location)
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightItin(email){
  return axios.post('/api/flightItin', {
    email
  })
}

export function hydrateFlightItin(flightItinData){
  return {
    type: "POST_FLIGHT_ITIN",
    flightItinData
  };
  }

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


//=============== ACTIVITY ITIN ===============
export const postActivityItin = (email, location) => {
  return function(dispatch){
    return axiosActivityItin(email)
    .then(res => {
      dispatch(hydrateActivityItin(res.data))
      browserHistory.push(location)
    })
    .catch(error => console.log(error));
  };
};

export function axiosActivityItin(email){
  return axios.post('/api/activityItin', {
    email
  })
}

export function hydrateActivityItin(activityItinData){
  return {
    type: "POST_ACTIVITY_ITIN",
    activityItinData
  };
}
//////////////////////////////////////////////
export const changeStatus = (itemId, typeId, statusId) => {
  return function(dispatch){
    return axiosChangeStatus(itemId, typeId, statusId)
    .then(res => {
      dispatch(hydrateItinStatus(res.data, itemId, typeId, statusId))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosChangeStatus(itemId, typeId, statusId){
  return axios.post('/api/changeStatus', {
    itemId,
    typeId,
    statusId
  })
}

export function hydrateItinStatus(itinStatusInfo, itemId, typeId, statusId){
  return {
    type: "POST_CHANGE_STATUS",
    itinStatusInfo,
    itemId,
    typeId,
    statusId
  };
}

//==================== ADDING NEW TRIP =======================================

export const postNewTrip = (tripName, email) => {
  return function(dispatch){
    return axiosNewTrip(tripName, email)
    .then(res => {
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


//======================= GET ALL EXISTING TRIPS ==============================
export const getAllTrips = (email, location) => {
  return function(dispatch){
    return axiosGetTrips(email)
    .then(res => {
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

//==================== GETTING TRIP INFO FROM ALL TABLES =======================================

export const getAllTripInfo = (tripId, location) => {
  return function(dispatch){
    return axiosAllTripInfo(tripId)
    .then(res => {
      dispatch(hydrateAllTripInfo(res.data, tripId))
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
