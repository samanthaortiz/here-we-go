const expediaCarRentalInfo = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type) {
    case 'POST_CAR_RENTAL_EXPEDIA':
      return {
        expediaCarRentalInfo: action.expediaCarRentalInfo,
        location: action.location,
        pickUpDate: action.pickUpDate,
        dropOffDate: action.dropOffDate
      }
    default:
      return state;
  }
}

export default expediaCarRentalInfo;
