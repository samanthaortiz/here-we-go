import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< 9add38837ff52066af48823227777537884c289a
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';
=======
import reducerFlightData from './reducerFlightData';

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 

>>>>>>> revert(Frontend): Frontend routing for login reversed

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
<<<<<<< 9add38837ff52066af48823227777537884c289a
  reducerLoginData,
=======
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
>>>>>>> revert(Frontend): Frontend routing for login reversed
  routing: routerReducer
});

export default rootReducer;