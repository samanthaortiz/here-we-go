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
    reducerCarItin: [],
    reducerActivityItin: [],
    reducerChangeStatus: [],
    reducerNewTrip: [],
    reducerAllTrips: [],
    reducerAllTripInfo: [],
    reducerUpdateTripId: []
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;