import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps(state){
  // console.log('master.js: ', state)
  return {
    reducerTripData: state.reducerTripData,
    reducerFlightData: state.reducerFlightData
    // expediaHotelInfo: state.expediaHotelInfo,
    // expediaFlightInfo: state.expediaFlightInfo,
    // expediaCarRentalInfo: state.expediaCarRentalInfo,
    // expediaActivityInfo: state.expediaActivityInfo
  }
}

//dispatch triggers a state change
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const Master = connect(mapStateToProps, mapDispatchToProps)(App);
//takes app component and adds all the data from state to props, and action creators to App
export default Master;