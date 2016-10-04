const budgetFormData = (state = [], action) => {
  switch (action.type){
    case 'POST_BUDGET_FORM_DATA':
      return {
        totalBudget: action.totalBudget,
        hotelBudget: action.hotelBudget,
        flightBudget: action.flightBudget,
        carRentalBudget: action.carRentalBudget,
        activityBudget: action.activityBudget
      }
    default:
      return state;
  }
}

export default budgetFormData