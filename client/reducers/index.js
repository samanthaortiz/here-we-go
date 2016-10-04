import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
  reducerLoginData,
  reducerHotelItin,
  reducerFlightItin,
  reducerCarItin,
  routing: routerReducer
});

export default rootReducer;