// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';
const Panel = React.createClass({
<<<<<<< 3dc3db4d43623b6caef3716eeef538d3e829d2d6
<<<<<<< e3408d90308fb3d17dc89ed38128ac314958ec55

  
  render() {
=======
=======

>>>>>>> feat(flights): refactoring flights, data is persisting
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

<<<<<<< 8c761d6b40301728dbc9576780208702ef5999cd
<<<<<<< 3dc3db4d43623b6caef3716eeef538d3e829d2d6
<<<<<<< fc352281dc384a17da4697b704af4265392007a2
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
=======



=======
>>>>>>> perf(flight): render flights
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
<<<<<<< 8c761d6b40301728dbc9576780208702ef5999cd
>>>>>>> perf(flights): flight performance changes: progress

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
=======
  // renderFlights(offers) {
  //   console.log(offers);
  //   return (
  //     offers.map((flight) =>
  //       <Flight
  //         key={flight.productKey}
  //         flightInfo={flight}
  //         // startDate={this.props.data.expediaFlightInfo.startDate}
  //         // endDate={this.props.data.expediaFlightInfo.endDate}
  //       />
  //     )
  //   )
  // },
=======
>>>>>>> perf(flight): render flights


  
  render() {
    console.log('>>>>> PANEL <<<<<');
    // console.log('*****Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);
    console.log('trip data in panel===> ', this.props)
>>>>>>> feat(flights): refactoring flights, data is persisting

    var flightTile;
    if(this.props.data.reducerTripData.gotFlights){
      // console.log("GOT FLIGHTS!!! props:", this.props, "state", this.state)
      var flightInfo = this.props.data.reducerFlightData.expediaFlightInfo.offers
      flightTile = this.renderFlights(flightInfo)
    } else {
      flightTile = <FlightTile flightData={this.props.data} flightOptions={this.state}/>
    }

<<<<<<< 3dc3db4d43623b6caef3716eeef538d3e829d2d6
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
>>>>>>> feat(flights): Panel component dynamically rendering flights tile
=======
    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.reducerTripData} />
        {flightTile}
        {/*<CarRentalTile carData={this.props}/>*/}
        <ActivityTile activityData={this.props.data.reducerTripData}/>
>>>>>>> feat(flights): refactoring flights, data is persisting
      </div>
    );
  }
});


export default Panel;