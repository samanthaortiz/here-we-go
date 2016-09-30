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
<<<<<<< e90e10ef6cabd6dffb86ee71e5183f55bd17dc76
<<<<<<< 6c9c58f2af1d7b4ae64da94185e9f2f64aee71eb
<<<<<<< 1cb83ad6a061a25256399afc25cd284b0dae5a8e
<<<<<<< e7d5fd27f7479dc1497b2a5ebf07d33787fce4d3
<<<<<<< 17c9c545718b814185ff0cab76d88e12f41a9aae
<<<<<<< f68c22faf592d3e1d05150b7dd8f2b2543cdd88c
<<<<<<< bd3cd26063108da1e8ce4a1c1d225581be235395
<<<<<<< ba2babc299e785f56b2e5117e05f65d120cb5f55
<<<<<<< b662ae37bf85f82cd621019d3053874e3c9d93e8
<<<<<<< 5ac3de2ea53817a7600fc059312d7bf805db06e1
<<<<<<< 18c3a8a024791417e31e679c32de9ecd57b8cf0f
<<<<<<< 6e5551b708a2f4d196e83a34644daaaba250d3ef
<<<<<<< 38b6c52d417233c46c25488baac4733b5b969582
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
=======
=======
=======
=======
=======
<<<<<<< 20906553828de195c8daae8903d9b463f265e24c
>>>>>>> Fix merge conflicts
<<<<<<< 8ee0effbd37e9170d4df68ad48da776573a39906
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 38a146ff35915b9742ddbef836c64ddabdcf9651
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 41bdead0806d5f1f19690752b2c7ee94bf634b43
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 07d418e5757e49f75ab82c11a8b97f37e06c1599
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 6b2ea6eff216e301ea1c168b4687bfc3533cbc90
<<<<<<< f2069aa4b70c4ce99fe0736eccc90e1035eeeb77
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 6e5551b708a2f4d196e83a34644daaaba250d3ef
=======
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
>>>>>>> chore(Styles): added css to autocomplete input field
=======
<<<<<<< 3e4ff4bb01dc2963e17f8ce4ba2c63ff14698577
=======
=======
=======
=======
=======
=======
<<<<<<< 15cb286807499e04e92fa052f7988f2f6112667d
>>>>>>> Fix merge conflicts
<<<<<<< 34416c09e735fc495a89f142bc9874e63a4d24da
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 37efff517931d54b69c0dc129626fe278938d9bc
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 186196ab4e5524e5d5c8aefb7aba7232840ed0c3
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 8ba0fad191c4dc0fc3af21a3c20ace8db507c411
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 35185295f44cb696c95783e95829eb359a7c402b
<<<<<<< 3e4ff4bb01dc2963e17f8ce4ba2c63ff14698577
=======
<<<<<<< 5820b11bc12f9ec6d9ddbe071c7a2aec8571965c
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< e7d5fd27f7479dc1497b2a5ebf07d33787fce4d3
=======
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
>>>>>>> chore(Styles): added css to autocomplete input field
        <CarRentalTile carData={this.props.data.reducerTripData}/>
=======
        <FlightTile flightData={this.props} />
        {/*<CarRentalTile carData={this.props.data.reducerTripData}/>*/}
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 6c9c58f2af1d7b4ae64da94185e9f2f64aee71eb
<<<<<<< e7d5fd27f7479dc1497b2a5ebf07d33787fce4d3
<<<<<<< 17c9c545718b814185ff0cab76d88e12f41a9aae
<<<<<<< bd3cd26063108da1e8ce4a1c1d225581be235395
<<<<<<< 5ac3de2ea53817a7600fc059312d7bf805db06e1
<<<<<<< 6e5551b708a2f4d196e83a34644daaaba250d3ef
<<<<<<< 38b6c52d417233c46c25488baac4733b5b969582
<<<<<<< f31ae0137620402c93b920ae0f8f3e75c1a579e0
<<<<<<< 207fd20bb1b2dcc756c2ba2e358cc7fdc96b5aec
<<<<<<< 18cecf01a84239ad84e4a9d6495ee4a5108a1e16
=======
=======
<<<<<<< 8ee0effbd37e9170d4df68ad48da776573a39906
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 41bdead0806d5f1f19690752b2c7ee94bf634b43
>>>>>>> chore(Styles): added css to autocomplete input field
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
=======
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 6e5551b708a2f4d196e83a34644daaaba250d3ef
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
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> Begin sift to db
=======
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
>>>>>>> chore(cleanup): clean up merge artifacts
=======
=======
<<<<<<< 34416c09e735fc495a89f142bc9874e63a4d24da
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< 186196ab4e5524e5d5c8aefb7aba7232840ed0c3
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
=======
>>>>>>> chore(Styles): added css to autocomplete input field
<<<<<<< 6c9c58f2af1d7b4ae64da94185e9f2f64aee71eb
>>>>>>> chore(Styles): added css to autocomplete input field
=======
=======
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> chore(cleanup): clean up merge artifacts
>>>>>>> chore(cleanup): clean up merge artifacts
<<<<<<< e90e10ef6cabd6dffb86ee71e5183f55bd17dc76
>>>>>>> chore(cleanup): clean up merge artifacts
=======
=======
        <CarRentalTile carData={this.props.data.reducerTripData}/>
>>>>>>> Fix merge conflicts
>>>>>>> Fix merge conflicts
        <ActivityTile activityData={this.props.data.reducerTripData}/>
      </div>
    );
  }
});

export default Panel;