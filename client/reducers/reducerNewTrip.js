const reducerNewTrip = (state = [], action) => {
  switch (action.type){
    case 'POST_NEW_TRIP':
      return {
        newTripInfo: action.newTripInfo,
        tripName: action.tripName,
        email: action.email
      }
    default:
      return state;
  }
};

export default reducerNewTrip;