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
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
import reducerLoginData from './reducerLoginData';
<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
import reducerHotelItin from './reducerHotelItin';
=======
import reducerDatabaseData from './reducerDatabaseData'; 
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 

<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts resolved

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
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
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
  reducerLoginData,
>>>>>>> Merge conflicts resolved
  routing: routerReducer
});

export default rootReducer;