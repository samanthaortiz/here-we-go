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
<<<<<<< 056e89e67f2e189c9b9bbd4774fe1c08dd52a721
<<<<<<< c19f20061e6e3943db0395e1b9036337db9a7429
<<<<<<< d520e4c67170cc9b02b8b2bc861a254dc85c42b3
<<<<<<< 15cb286807499e04e92fa052f7988f2f6112667d
<<<<<<< 34416c09e735fc495a89f142bc9874e63a4d24da
<<<<<<< 37efff517931d54b69c0dc129626fe278938d9bc
<<<<<<< 186196ab4e5524e5d5c8aefb7aba7232840ed0c3
<<<<<<< 8ba0fad191c4dc0fc3af21a3c20ace8db507c411
<<<<<<< 35185295f44cb696c95783e95829eb359a7c402b
<<<<<<< 3e4ff4bb01dc2963e17f8ce4ba2c63ff14698577
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field
=======
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2
=======
=======
<<<<<<< b53ee1f29f37ed56d0e8ecfda5d1d46b0fba0aa2
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< b1848dc86c4700f0c2750862fdcd197beb2d0e4d
<<<<<<< f38bf1b68e35f0c696d0ab39e4ac73f270ecd1d2
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
=======
<<<<<<< f2069aa4b70c4ce99fe0736eccc90e1035eeeb77
=======
=======
<<<<<<< 07d418e5757e49f75ab82c11a8b97f37e06c1599
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 6b2ea6eff216e301ea1c168b4687bfc3533cbc90
<<<<<<< f2069aa4b70c4ce99fe0736eccc90e1035eeeb77
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field
>>>>>>> chore(Styles): added css to autocomplete input field
        <CarRentalTile carData={this.props.data.reducerTripData}/>
=======
        <FlightTile flightData={this.props} />
        {/*<CarRentalTile carData={this.props.data.reducerTripData}/>*/}
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 056e89e67f2e189c9b9bbd4774fe1c08dd52a721
<<<<<<< d520e4c67170cc9b02b8b2bc861a254dc85c42b3
<<<<<<< 34416c09e735fc495a89f142bc9874e63a4d24da
<<<<<<< 186196ab4e5524e5d5c8aefb7aba7232840ed0c3
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
=======
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
>>>>>>> chore(cleanup): clean up merge artifacts
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> Fix merge conflicts
=======
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
>>>>>>> chore(cleanup): clean up merge artifacts
        <ActivityTile activityData={this.props.data.reducerTripData}/>
      </div>
    );
  }
});

export default Panel;