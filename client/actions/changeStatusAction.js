import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== CHANGE STATUS OF ITEM ===============

export const changeStatus = (itemId, typeId, statusId) => {
  return function(dispatch){
    return axiosChangeStatus(itemId, typeId, statusId)
    .then(res => {
      dispatch(hydrateItinStatus(res.data, itemId, typeId, statusId))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosChangeStatus(itemId, typeId, statusId){
  return axios.post('/api/changeStatus', {
    itemId,
    typeId,
    statusId
  })
}

export function hydrateItinStatus(itinStatusInfo, itemId, typeId, statusId){
  return {
    type: "POST_CHANGE_STATUS",
    itinStatusInfo,
    itemId,
    typeId,
    statusId
  };
}