// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import Flight from './Flight';
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';

const Panel = React.createClass({
<<<<<<< e3408d90308fb3d17dc89ed38128ac314958ec55

  
  render() {
=======
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

  // renderFlights() {
  //   return (
  //     <div {...this.props}>
  //     this.props.flightData.expediaFlightInfo.flightList.map((flight) =>
  //       <Flight
  //         key={flight.flightId}
  //         flightInfo={flight}
  //         startDate={this.props.flightData.startDate}
  //         endDate={this.props.flightData.endDate}
  //       />
  //     </div>
  //   )
  // },
>>>>>>> feat(flights): Panel component dynamically rendering flights tile

  render() {
    //to render later: <CarRentalTile carData={this.props}/>  <div>{flightTile}</div>  <FlightTile flightData={this.props}/>
    console.log('>>>>> PANEL <<<<<');
    // console.log('*****Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);
<<<<<<< e3408d90308fb3d17dc89ed38128ac314958ec55
    console.log('hotel data ===> ', this.props)
    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.reducerTripData} />
        <FlightTile flightData={this.props} />
        {/*<CarRentalTile carData={this.props}/>*/}
        <ActivityTile activityData={this.props.data.reducerTripData}/>
=======
//{this.state.gotFlights ? this.renderFlights() : <FlightTile flightData={this.props}/>}
    var flightTile;
    if(this.state.gotFlights){
      flightTile = "GOT FLIGHTS!"
    } else {
      flightTile = <FlightTile flightData={this.props} flightOptions={this.state}/>
    } 
    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.expediaHotelInfo} />
        {flightTile}
>>>>>>> feat(flights): Panel component dynamically rendering flights tile
      </div>
    );
  }
});

export default Panel;
