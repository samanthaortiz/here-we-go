const expediaFlightInfo = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_FLIGHT_EXPEDIA':
      return {
        expediaFlightInfo: action.expediaFlightInfo,
        departureAirport: action.departureAirport,
        destinationAirport: action.destinationAirport,
        startDate: action.startDate,
        endDate: action.endDate,
        adults: action.adults, 
        childUnder18: action.childUnder18, 
        infants: action.infants
      }
      case 'GET_FLIGHT_CODE':
      return {
        expediaFlightInfo: action.expediaFlightInfo,
        locationForFlightSearch: action.locationForFlightSearch
      }
    default:
      return state;
  }
}

export default expediaFlightInfo
//this is the api call