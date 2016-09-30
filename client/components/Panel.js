// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import Flight from './Flight'
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';
const Panel = React.createClass({

  getInitialState() {
   return {
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
    console.log('got flights before if statement', this.state.gotFlights)

    var flightTile;
    if(this.state.gotFlights){
      console.log("GOT FLIGHTS!!! props:", this.props, "state", this.state)
      
      var flightInfo = this.props.data.reducerFlightData.expediaFlightInfo.offers
      var flightLegs = this.props.data.reducerFlightData.expediaFlightInfo.legs

      flightTile = <FlightTile flightOffers={flightInfo} flightLegs={flightLegs} flightOptions={this.state}/>
    } else {
      flightTile = <FlightTile flightData={this.props.data} flightOptions={this.state}/>
    }

    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.reducerTripData} />
        {flightTile}
<<<<<<< b1848dc86c4700f0c2750862fdcd197beb2d0e4d
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field
        <CarRentalTile carData={this.props.data.reducerTripData}/>
=======
        <FlightTile flightData={this.props} />
        {/*<CarRentalTile carData={this.props.data.reducerTripData}/>*/}
>>>>>>> chore(Styles): added css to autocomplete input field
        <ActivityTile activityData={this.props.data.reducerTripData}/>
      </div>
    );
  }
});

export default Panel;