import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
=======
import reducerCarItin from './reducerCarItin';
import reducerFlightItin from './reducerFlightItin';
>>>>>>> feat(itin): itin component - working on rendering db data

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