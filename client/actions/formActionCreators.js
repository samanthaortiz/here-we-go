import axios from 'axios';
import { browserHistory } from 'react-router';

//=============== TRIP DATA ===============
export const submitBudgetFormData = (totalBudget, hotelBudget, flightBudget, carRentalBudget, activityBudget) => {
  return function(dispatch) {
    return axiosBudgetFormDataCall(totalBudget, hotelBudget, flightBudget, carRentalBudget, activityBudget)
    .then(res => {
      dispatch(hydrateBudgetFormDataStore(res.data, totalBudget, hotelBudget, flightBudget, carRentalBudget, activityBudget))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateBudgetFormDataStore(submittedFormData, totalBudget, hotelBudget, flightBudget, carRentalBudget, activityBudget){
  return {
    type: 'POST_BUDGET_FORM_DATA',
    submittedFormData,
    totalBudget,
    hotelBudget,
    flightBudget,
    carRentalBudget,
    activityBudget
  };
}

export function axiosBudgetFormDataCall(totalBudget, hotelBudget, flightBudget, carRentalBudget, activityBudget){
  return axios.post('/api/formBudget', {
    totalBudget,
    hotelBudget,
    flightBudget,
    carRentalBudget,
    activityBudget
  });
};