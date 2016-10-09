import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData'; 
import reducerLoginData from './reducerLoginData';
import reducerHotelItin from './reducerHotelItin';
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
import reducerActivityItin from './reducerActivityItin';
import reducerChangeStatus from './reducerChangeStatus';
import reducerNewTrip from './reducerNewTrip';
import reducerAllTrips from './reducerAllTrips'
import reducerUpdateTripId from "./reducerUpdateTripId";
import reducerAllTripInfo from "./reducerAllTripInfo";

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
  reducerLoginData,
  reducerHotelItin,
  reducerFlightItin,
  reducerCarItin,
  reducerActivityItin,
  reducerChangeStatus,
  reducerNewTrip,
  reducerAllTrips,
  reducerUpdateTripId,
  reducerAllTripInfo,
  routing: routerReducer
});

export default rootReducer;