// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';
const Panel = React.createClass({

  getInitialState() {
   return {
      airportDepartureCode: "",
      airportDestinationCode: "",
      availableAirportCodes: [],
      adults: 1,
      childUnder18: 0,
      infants: false,
      gotFlights: false
    }
  },

  renderFlights(offers) {
    console.log(offers);
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


  
  render() {
    console.log('>>>>> PANEL <<<<<');
    // console.log('*****Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);
    console.log('trip data in panel===> ', this.props)

    var flightTile;
    if(this.props.data.reducerTripData.gotFlights){
      // console.log("GOT FLIGHTS!!! props:", this.props, "state", this.state)
      var flightInfo = this.props.data.reducerFlightData.expediaFlightInfo.offers
      flightTile = this.renderFlights(flightInfo)
    } else {
      flightTile = <FlightTile flightData={this.props.data} flightOptions={this.state}/>
    }

    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.reducerTripData} />
        {flightTile}
        {/*<CarRentalTile carData={this.props}/>*/}
        <ActivityTile activityData={this.props.data.reducerTripData}/>
      </div>
    );
  }
});


export default Panel;