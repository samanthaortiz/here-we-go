import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
    reducerFlightData: [],
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
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