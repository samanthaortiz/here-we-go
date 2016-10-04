import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//data = api call
// import expediaHotelInfo from './data/dummyDataFlightsExpedia'

//create an obj for default data

const defaultState = {
    reducerTripData: [],
    reducerFlightData: [],
    reducerBudgetFormData: []
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
}

// let store = createStore(reducer, initialState, compose(applyMiddleware(...middleware),
  //   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;