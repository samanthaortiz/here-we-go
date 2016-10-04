import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< e4db8282208558316f753b7567fe51925efe15d4
import reducerFlightData from './reducerFlightData'; 
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
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
<<<<<<< e4db8282208558316f753b7567fe51925efe15d4
<<<<<<< 54d2c7812406b7c8acfb0d633bad5c7a2462dd9f
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