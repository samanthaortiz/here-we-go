import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
    reducerFlightData: [],
    reducerLoginData: [],
    reducerHotelItin: [],
    reducerFlightItin: [],
    reducerCarItin: []
<<<<<<< HEAD
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
=======

>>>>>>> feat(itin): itin component - working on rendering db data
=======

>>>>>>> 58fa0f4e474e0d061ceceac3ce252c6ae0f62af5
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;