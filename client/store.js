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
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
=======

>>>>>>> feat(itin): itin component - working on rendering db data
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;