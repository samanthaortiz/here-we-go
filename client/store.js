import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< c028e2f0c3f145c4eff0cd750a9575b509c355f0
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
=======
<<<<<<< 07dd22deababa6f1de4e79bdb4a93aa3a1b1bed0
>>>>>>> revert(Frontend): Frontend routing for login reversed
    reducerFlightData: [],
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< ae0f2b2d8f67c22ba30e05ae5d6e01ddc7f13654
<<<<<<< abe9159f2bf98e8a367aeefd4884179a4fc60478
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
<<<<<<< 4d07f2b8e197e616510f4e382e102ac5bc5ec68d
<<<<<<< b9327a09e905593425b326e54972209f03461f1b
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
>>>>>>> feat(Database): User email linked to each table
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
<<<<<<< c028e2f0c3f145c4eff0cd750a9575b509c355f0
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
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
=======
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Database): User email linked to each table
=======
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
<<<<<<< b689a5a39e928ad3bd56996f1efc62722473f215
<<<<<<< 2eedc288ae4bf78dc1aac23aacceba4f37b19c1e
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
=======
    reducerLoginData: [],
    reducerHotelItin: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
    reducerLoginData: [],
    reducerHotelItin: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
    reducerLoginData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;