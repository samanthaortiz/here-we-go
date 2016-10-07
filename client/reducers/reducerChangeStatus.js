const reducerChangeStatus = (state = [], action) => {
  switch (action.type){
    case 'POST_CHANGE_STATUS':
      return {
        itinStatusInfo: action.itinStatusInfo,
        itemId: action.itemId,
        typeId: action.typeId,
        statusId: action.statusId
      }
    default:
      return state;
  }
};

export default reducerChangeStatus;