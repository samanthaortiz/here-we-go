import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== ACTIVITY ITIN ===============

export const postActivityItin = (email, location) => {
  console.log('in post activity itin')
  return function(dispatch){
  console.log('now dispatching in activity itin')
    return axiosActivityItin(email)
    .then(res => {
        console.log('got response:', res.data)
      dispatch(hydrateActivityItin(res.data))
      browserHistory.push(location)
    })
    .catch(error => console.log(error));
  };
};

export function axiosActivityItin(email){
  return axios.post('/api/activityItin', {
    email
  })
}

export function hydrateActivityItin(activityItinData){
  return {
    type: "POST_ACTIVITY_ITIN",
    activityItinData
  };
}