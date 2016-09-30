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
<<<<<<< 49f8ebf8ba68f0a148f249789ee950a253884aa7
<<<<<<< f31ae0137620402c93b920ae0f8f3e75c1a579e0
<<<<<<< 5624af568c5592224298283ad898eab589affc5e
<<<<<<< 207fd20bb1b2dcc756c2ba2e358cc7fdc96b5aec
<<<<<<< 29667d1606633de43ae89ddb71522c7b1cfb873f
<<<<<<< 18cecf01a84239ad84e4a9d6495ee4a5108a1e16
<<<<<<< 289676c7f18af826ebd22950ce5c83b151135cad
<<<<<<< a25859445bb90fcad3b0260202e62aaaff74435d
<<<<<<< 98a7fc4864bce85fe578b00bcafa88ec9968b995
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
<<<<<<< f31ae0137620402c93b920ae0f8f3e75c1a579e0
<<<<<<< 207fd20bb1b2dcc756c2ba2e358cc7fdc96b5aec
<<<<<<< 18cecf01a84239ad84e4a9d6495ee4a5108a1e16
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
        <ActivityTile activityData={this.props.data.reducerTripData}/>
      </div>
    );
  }
});

export default Panel;