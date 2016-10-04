import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
    reducerFlightData: [],
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
>>>>>>> feat(Database): User email linked to each table
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;