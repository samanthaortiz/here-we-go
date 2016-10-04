const reducerTripData = (state = [], action) => {
  switch (action.type){
    case 'POST_TRIP_DATA':
      return {
        tripData: action.tripData,
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate,
      }
    default:
      return state;
  }
};

export default reducerTripData;
//this is the api call