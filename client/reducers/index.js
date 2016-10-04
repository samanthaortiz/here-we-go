import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
  reducerLoginData,
  routing: routerReducer
});

export default rootReducer;