// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import Flight from './Flight';
import CarRentalTile from './CarRentalTile';

const Panel = React.createClass({
  getInitialState() {
   return {
      airportDepartureCode: "",
      airportDestinationCode: "",
      availableAirportCodes: [],
      adults: 1,
      childUnder18: 0,
      infants: "false",
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
    //to render later: <CarRentalTile carData={this.props}/>  <div>{flightTile}</div>  <FlightTile flightData={this.props}/>
    console.log('>>>>> PANEL <<<<<');
    // console.log('Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);
//{this.state.gotFlights ? this.renderFlights() : <FlightTile flightData={this.props}/>}
    var flightTile;


    if(this.state.gotFlights){
      console.log("GOT FLIGHTS!!! props:", this.props, "state", this.state)
      var flightInfo = this.props.data.expediaFlightInfo.expediaFlightInfo.offers
      flightTile = this.renderFlights(flightInfo)
    } else {
      flightTile = <FlightTile flightData={this.props} flightOptions={this.state}/>
    } 
    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.expediaHotelInfo} />
        {flightTile}
      </div>
    );
  }
});

export default Panel;
