import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< 23f41d0253ac4520f5dc54ec2e416eacb8724e60
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
<<<<<<< e28ba6d77464595c58479854beb377373007492f
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
<<<<<<< 07dd22deababa6f1de4e79bdb4a93aa3a1b1bed0
=======
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
>>>>>>> revert(Frontend): Frontend routing for login reversed
    reducerFlightData: [],
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< 6425d50e55c46291fb694b3bcfad16cb5e1fb814
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< e28ba6d77464595c58479854beb377373007492f
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
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
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
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
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
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
<<<<<<< 546279dadafc751fb02f9fe439e31e811ff3c3c0
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
}
//   window.devToolsExtension ? window.devToolsExtension() : f => f));
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;