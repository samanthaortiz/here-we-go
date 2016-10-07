const reducerCarItin = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_CAR_ITIN':
      return {
        carItinData: action.carItinData,
      }
    default:
      return state;
  }
};

export default reducerCarItin;