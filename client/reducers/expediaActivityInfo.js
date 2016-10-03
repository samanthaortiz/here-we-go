const expediaActivityInfo = (state = [], action) => {
  switch (action.type){
    case 'POST_ACTIVITIES_EXPEDIA':
      return {
        expediaActivityInfo: action.expediaActivityInfo,
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

export default expediaActivityInfo