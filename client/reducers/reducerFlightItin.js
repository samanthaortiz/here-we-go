const reducerFlightItin = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_FLIGHT_ITIN':
      return {
        flightItinData: action.flightItinData,
      }
    default:
      return state;
  }
};

export default reducerFlightItin;