const reducerUpdateTripId = (state = [], action) => {
  switch (action.type){
    case 'UPDATE_TRIP_ID':
      return {
        updatedInfo: action.updatedInfo,
        tripId: action.tripId,
        itemId: action.itemId,
        typeId: action.typeId
      }
    default:
      return state;
  }
};

export default reducerUpdateTripId;