const expediaHotelInfo = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_HOTEL_EXPEDIA':
      return {
        expediaHotelInfo: action.expediaHotelInfo,
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

export default expediaHotelInfo