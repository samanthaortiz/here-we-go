import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
import reducerFlightData from './reducerFlightData'; 
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
=======
import reducerDatabaseData from './reducerDatabaseData'; 
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 

>>>>>>> feat(Database): User email linked to each table

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
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
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
>>>>>>> feat(Database): User email linked to each table
  routing: routerReducer
});

export default rootReducer;