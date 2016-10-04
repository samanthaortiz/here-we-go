import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
<<<<<<< 07dd22deababa6f1de4e79bdb4a93aa3a1b1bed0
    reducerFlightData: [],
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
    reducerFlightData: [],
    reducerLoginData: []
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
    reducerFlightData: [],
    reducerLoginData: []
>>>>>>> Merge conflicts resolved
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;