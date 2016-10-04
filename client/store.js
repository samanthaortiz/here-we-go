import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< 9add38837ff52066af48823227777537884c289a
    reducerFlightData: [],
    reducerLoginData: []
=======
    reducerFlightData: []
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;