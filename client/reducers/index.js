import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerTripData from './reducerTripData';
<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
<<<<<<< 86be8d952ac520dba49004860fe8aa99823c95d0
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts resolved
=======
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
>>>>>>> revert(Frontend): Frontend routing for login reversed
import reducerFlightData from './reducerFlightData'; 
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
>>>>>>> feat(Database): User email linked to each table
import reducerLoginData from './reducerLoginData';
<<<<<<< 86be8d952ac520dba49004860fe8aa99823c95d0
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
import reducerHotelItin from './reducerHotelItin';
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
import reducerFlightItin from './reducerFlightItin';
import reducerCarItin from './reducerCarItin';
=======
import reducerDatabaseData from './reducerDatabaseData'; 
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
import reducerDatabaseData from './reducerDatabaseData'; 
<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
>>>>>>> feat(Database): User email linked to each table
=======
=======
import reducerFlightData from './reducerFlightData';
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 

<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> Merge conflicts resolved
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table

const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 86be8d952ac520dba49004860fe8aa99823c95d0
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
<<<<<<< 282f30541c2e13db795be3896f073aa477d14eb8
<<<<<<< 2a53bd763ddf801209605c2c14c07736a9f48aab
  reducerLoginData,
  reducerHotelItin,
  reducerFlightItin,
  reducerCarItin,
=======
  reducerDatabaseData,
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 9add38837ff52066af48823227777537884c289a
  reducerLoginData,
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
<<<<<<< d383f6dfe1d18cb426ad8a49abf6e62356b94f8d
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
  reducerLoginData,
  reducerHotelItin,
=======
  reducerDatabaseData,
<<<<<<< 1cf3d4e0499b03f91ab368f3e40df10d41aa74a6
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
<<<<<<< b49447b5396e5ef02e9536f89a51b26820ff4f3f
<<<<<<< 52862e54fe6c7760bce63da1635f84688f6b7e9f
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
  reducerLoginData,
>>>>>>> Merge conflicts resolved
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
  routing: routerReducer
});

export default rootReducer;