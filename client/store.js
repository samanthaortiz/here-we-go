import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    reducerTripData: [],
<<<<<<< 0abef1180b35c351c994ca4975047a61676d080c
<<<<<<< e7293b29502d84a390b61ce5a09808a21c9a03dc
<<<<<<< ebdcfb1b766d9fe80364d2d3795b586966613349
<<<<<<< 5aaccc52731c27e7d4012af743a4493a893daa61
<<<<<<< 78bc001c0ca98711fa4371148788ab1b65bb8e93
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
=======
=======
=======
=======
=======
<<<<<<< 23f41d0253ac4520f5dc54ec2e416eacb8724e60
>>>>>>> Merge conflicts resolved
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< e28ba6d77464595c58479854beb377373007492f
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
>>>>>>> Merge conflicts resolved
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 07dd22deababa6f1de4e79bdb4a93aa3a1b1bed0
<<<<<<< ebdcfb1b766d9fe80364d2d3795b586966613349
=======
=======
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
    reducerFlightData: [],
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 7c64e758e20ba76f03209ec7de2f6c9e0ae3a088
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
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
=======
=======
=======
=======
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 6425d50e55c46291fb694b3bcfad16cb5e1fb814
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
=======
=======
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
>>>>>>> feat(Database): User email linked to each table
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
=======
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
    reducerLoginData: [],
    reducerHotelItin: []
=======
    reducerDatabaseData: []
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< ebdcfb1b766d9fe80364d2d3795b586966613349
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
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
=======
=======
=======
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< e28ba6d77464595c58479854beb377373007492f
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 78bc001c0ca98711fa4371148788ab1b65bb8e93
=======
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
    reducerFlightData: [],
    reducerLoginData: []
=======
    reducerFlightData: []
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
>>>>>>> feat(Database): User email linked to each table
<<<<<<< ebdcfb1b766d9fe80364d2d3795b586966613349
>>>>>>> feat(Database): User email linked to each table
=======
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
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> feat(Database): User email linked to each table
  // expediaHotelInfo: [],
  // expediaFlightInfo: [],
  // expediaCarRentalInfo: [],
  // expediaActivityInfo: []
<<<<<<< faa67ee73a657d0dc9ea89e01e80dac14fc90a5f
<<<<<<< 81639c1bedcf7df839b5772fcc6af66b304715c1
<<<<<<< e7293b29502d84a390b61ce5a09808a21c9a03dc
<<<<<<< 023e421cde6380e2e6bfa671a4f76d3942ab9391
<<<<<<< 78bc001c0ca98711fa4371148788ab1b65bb8e93
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
=======
=======
=======
=======
=======
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> feat(Database): User email linked to each table
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> feat(Database): User email linked to each table
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> feat(Database): User email linked to each table
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> revert(Frontend): Frontend routing for login reversed
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