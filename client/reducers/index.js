import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import posts from'./posts';
import expediaHotelInfo from './expediaHotelInfo'; 
import expediaFlightInfo from './expediaFlightInfo';
import expediaCarRentalInfo from './expediaCarRentalInfo'; 
import expediaActivityInfo from './expediaActivityInfo'; 


const rootReducer = combineReducers({
  expediaHotelInfo,
  expediaFlightInfo,
  expediaCarRentalInfo,
  expediaActivityInfo,
  routing: routerReducer
});

export default rootReducer;