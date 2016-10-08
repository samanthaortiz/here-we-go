// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import Flight from './Flight'
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';
// import CampgroundTile from './CampgroundTile';
const Panel = React.createClass({
  getInitialState() {
   return {
      gotFlights: false
    }
  },
 
  renderFlights(offers) {
    // console.log(offers);
    return (
      offers.map((flight) =>
        <Flight
          key={flight.productKey}
          flightInfo={flight}
          // startDate={this.props.data.expediaFlightInfo.startDate}
          // endDate={this.props.data.expediaFlightInfo.endDate}
        />
      )
    )
  },

  // componentDidMount() {
  //   const renderCarouselContainer = function() {
  //     console.log('start!!!!')
  //     var ulElement = document.getElementById('row');
  //     var liNodeList = '';

  //     for(var i = 0; i < ulElement.length; i++) {
  //       var liNodeList = ulElement[i].getElementsByTagName('li');
  //       var myWidth = liNodeList.length * 315;
  //       ulElement[i].style.width = myWidth + 'px';
  //     }
  //   };
  // },

  // **** TO DO **** ?
  // componentDidMount() {
  //   after hotel tile content loads, call filghts, cars, and activites
  // },

  render() {
    // console.log('>>>>> PANEL <<<<<');
    // console.log('trip data in panel===> ', this.props)
    // console.log('got flights before if statement', this.state.gotFlights)

    var flightTile;
    if(this.state.gotFlights) {
      var flightInfo = this.props.data.reducerFlightData.expediaFlightInfo.offers
      var flightLegs = this.props.data.reducerFlightData.expediaFlightInfo.legs

      flightTile = <FlightTile {...this.props} savedItemBoolean={this.props.dashboardState.savedItemBoolean} flightOffers={flightInfo} flightLegs={flightLegs} flightOptions={this.state} userEmail={this.props.data.reducerTripData.email} />
    } else {
      flightTile = <FlightTile {...this.props} flightData={this.props.data} flightOptions={this.state} />
    }

    return (
      <div className="dashboard-container clearfix">
        <HotelTile {...this.props} savedItemBoolean={this.props.dashboardState.savedItemBoolean} hotelData={this.props.data.reducerTripData} />
        {flightTile}
        <CarRentalTile {...this.props} savedItemBoolean={this.props.dashboardState.savedItemBoolean} carData={this.props.data.reducerTripData} />
        <ActivityTile {...this.props} savedItemBoolean={this.props.dashboardState.savedItemBoolean} activityData={this.props.data.reducerTripData} />
      {/*<CampgroundTile campgroundData={this.props.data.reducerTripData}/>*/}
      </div>
    );
  }
});

export default Panel;
