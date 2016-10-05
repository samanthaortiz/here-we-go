import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';
<<<<<<< HEAD
<<<<<<< f3384c81ba504d1a68aaee0a7204749d34173910
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
=======
import reducerCarItin from './reducerCarItin';
import reducerFlightItin from './reducerFlightItin';
>>>>>>> feat(itin): itin component - working on rendering db data
=======
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
>>>>>>> feat(itinerary): hotel itin data sending to itin component
=======
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
>>>>>>> 58fa0f4e474e0d061ceceac3ce252c6ae0f62af5

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