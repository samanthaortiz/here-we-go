const reducerAllTripInfo = (state = [], action) => {
  switch (action.type){
    case 'GET_ALL_TRIP_INFO':
      return {
        allTripInfo: action.allTripInfo,
        tripId: action.tripId
      }
    default:
      return state;
  }
};

export default reducerAllTripInfo;