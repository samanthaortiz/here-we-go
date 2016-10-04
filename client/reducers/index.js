import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';
=======
import reducerDatabaseData from './reducerDatabaseData'; 

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 

>>>>>>> feat(Database): User email linked to each table

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
  reducerLoginData,
  reducerHotelItin,
  reducerFlightItin,
  reducerCarItin,
=======
  reducerDatabaseData,
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
>>>>>>> feat(Database): User email linked to each table
  routing: routerReducer
});

export default rootReducer;