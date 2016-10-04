import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
<<<<<<< 07dd22deababa6f1de4e79bdb4a93aa3a1b1bed0
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts resolved
import reducerFlightData from './reducerFlightData'; 
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
import reducerLoginData from './reducerLoginData';
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
import reducerHotelItin from './reducerHotelItin';
=======
import reducerDatabaseData from './reducerDatabaseData'; 
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> feat(Database): User email linked to each table

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 

<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts resolved
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
<<<<<<< 07dd22deababa6f1de4e79bdb4a93aa3a1b1bed0
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
  reducerLoginData,
  reducerHotelItin,
  reducerFlightItin,
  reducerCarItin,
=======
  reducerDatabaseData,
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
  reducerLoginData,
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
  reducerLoginData,
  reducerHotelItin,
=======
  reducerDatabaseData,
>>>>>>> feat(Database): User email linked to each table
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
  reducerLoginData,
>>>>>>> Merge conflicts resolved
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
  routing: routerReducer
});

export default rootReducer;