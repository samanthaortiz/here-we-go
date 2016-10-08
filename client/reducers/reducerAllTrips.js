const reducerAllTrips = (state = [], action) => {
  switch (action.type){
    case 'GET_ALL_TRIPS':
      return {
        allTripInfo: action.allTripInfo,
        email: action.email
      }
    default:
      return state;
  }
};

export default reducerAllTrips;