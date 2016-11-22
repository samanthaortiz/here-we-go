import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as activityItinAction from '../actions/activityItinAction';
import * as allTripInfoAction from '../actions/allTripInfoAction';
import * as allTripsAction from '../actions/allTripsAction';
import * as carItinAction from '../actions/carItinAction';
import * as changeStatusAction from '../actions/changeStatusAction';
import * as flightDataAction from '../actions/flightDataAction';
import * as flightItinAction from '../actions/flightItinAction';
import * as hotelItinAction from '../actions/hotelItinAction';
import * as newTripAction from '../actions/newTripAction';
import * as postTripDataAction from '../actions/postTripDataAction';
import * as updateTripAction from '../actions/updateTripAction';


import App from './App';

function mapStateToProps(state){
  return {
    reducerTripData: state.reducerTripData,
    reducerFlightData: state.reducerFlightData,
    reducerLoginData: state.reducerLoginData,
    reducerHotelItin: state.reducerHotelItin,
    reducerFlightItin: state.reducerFlightItin,
    reducerCarItin: state.reducerCarItin,
    reducerActivityItin: state.reducerActivityItin,
    reducerChangeStatus: state.reducerChangeStatus,
    reducerNewTrip: state.reducerNewTrip,
    reducerAllTrips: state.reducerAllTrips,
    reducerAllTripInfo: state.reducerAllTripInfo,
    reducerUpdateTripId: state.reducerUpdateTripId
  }
}

//dispatch triggers a state change
function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
    ...activityItinAction,
    ...allTripInfoAction,
    ...allTripsAction,
    ...carItinAction,
    ...changeStatusAction,
    ...flightDataAction,
    ...flightItinAction,
    ...hotelItinAction,
    ...newTripAction,
    ...postTripDataAction,
    ...updateTripAction
    }, dispatch);
}

const Master = connect(mapStateToProps, mapDispatchToProps)(App);
//takes app component and adds all the data from state to props, and action creators to App
export default Master;