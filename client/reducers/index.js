import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';
<<<<<<< bd727bb550119863c1dc38e9607c40ca1c8ab1ad
import reducerHotelItin from './reducerHotelItin';
=======
>>>>>>> Merge conflicts resolved

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
  reducerLoginData,
<<<<<<< bd727bb550119863c1dc38e9607c40ca1c8ab1ad
  reducerHotelItin,
=======
>>>>>>> Merge conflicts resolved
  routing: routerReducer
});

export default rootReducer;