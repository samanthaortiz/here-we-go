import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
import reducerFlightData from './reducerFlightData'; 
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';
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
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
  reducerLoginData,
  reducerHotelItin,
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