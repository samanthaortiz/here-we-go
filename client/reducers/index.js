import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import posts from'./posts';
import expediaHotelInfo from './expediaHotelInfo'; 
import expediaFlightInfo from './expediaFlightInfo'; 

const rootReducer = combineReducers({expediaHotelInfo, expediaFlightInfo, routing: routerReducer });

export default rootReducer;