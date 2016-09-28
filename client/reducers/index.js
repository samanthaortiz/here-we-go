import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import posts from'./posts';
import expediaHotelInfo from './expediaHotelInfo'; 
import expediaFlightInfo from './expediaFlightInfo';
import expediaCarRentalInfo from './expediaCarRentalInfo'; 

const rootReducer = combineReducers({
  expediaHotelInfo,
  expediaFlightInfo,
  expediaCarRentalInfo,
  routing: routerReducer
});

export default rootReducer;