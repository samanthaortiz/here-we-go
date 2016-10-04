import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< 18543cb9b54081504ec03e90b3ba2223cd0f113a
<<<<<<< bf5c7d9c550e05e80a556bb84fed6cc745e36bb1
<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
<<<<<<< 86be8d952ac520dba49004860fe8aa99823c95d0
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
=======
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
>>>>>>> revert(Frontend): Frontend routing for login reversed
    reducerFlightData: [],
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
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
=======
>>>>>>> feat(Database): User email linked to each table
=======
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< bf5c7d9c550e05e80a556bb84fed6cc745e36bb1
=======
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
    reducerFlightData: [],
    reducerLoginData: []
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> feat(Database): User email linked to each table
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< bf5c7d9c550e05e80a556bb84fed6cc745e36bb1
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
    reducerFlightData: [],
    reducerLoginData: []
>>>>>>> Merge conflicts resolved
=======
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
    reducerFlightData: [],
<<<<<<< e339ff194dea6fd879ee8649042ec21d5d0c08d8
    reducerLoginData: []
>>>>>>> Merge conflicts resolved
=======
    reducerLoginData: [],
    reducerHotelItin: []
>>>>>>> Routing updated
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;