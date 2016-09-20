const expediaInfo = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_EXPEDIA':
      return {
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate
      }
  }
  return state;
}

export default expediaInfo
//this is the api call