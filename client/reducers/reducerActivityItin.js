const reducerActivityItin = (state = [], action) => {
  switch (action.type){
    case 'POST_ACTIVITY_ITIN':
      return {
        activityItinData: action.activityItinData,
      }
    default:
      return state;
  }
};

export default reducerActivityItin;