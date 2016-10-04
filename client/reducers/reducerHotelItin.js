const reducerHotelItin = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_HOTEL_ITIN':
      return {
        hotelItinData: action.hotelItinData,
        email: action.email
      }
    default:
      return state;
  }
};

export default reducerHotelItin;