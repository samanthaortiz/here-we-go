import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
import reducerFlightData from './reducerFlightData'; 
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
import reducerLoginData from './reducerLoginData';
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
import reducerHotelItin from './reducerHotelItin';
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
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

<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
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
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
  routing: routerReducer
});

export default rootReducer;