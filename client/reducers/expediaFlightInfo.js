const expediaFlightInfo = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_Flight_EXPEDIA':
      return {
        expediaFlightInfo: action.expediaFlightInfo,
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

export default expediaFlightInfo
//this is the api call