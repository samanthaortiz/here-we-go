// DASHBOARD > PANEL > FLIGHT TILE >  FLIGHT ==================================
import React from 'react';

const Flight = React.createClass({
  getInitialState: function() {
    return {
      setSingleFlight: '',
      // ====================================
      status_id: '',
      type_id: '',
      user_email: '',
      terminal: '',
      departureAirportName: '',
      departureAirportCode: '',
      departureAirportCity: '',
      arrivalAirportName: '',
      arrivalAirportCode: '',
      arrivalAirportCity: '',
      airline: '',
      flightNumber: '',
      ticketNumber: '',
      seatType: '',
      seatRow: '',
      seatNumber: '',
      membershipNumber: '',
      broker: '',
      departureTime: '',
      arrivalTime: ''
    };

  },

  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  getFlightLegs(){
    let allLegs = this.props.flightLegs;
    let givenLegs = this.props.flightInfo.legIds;

    let legs = [];
    allLegs.forEach(function(leg){
      if(leg.legId === givenLegs[0] || leg.legId === givenLegs[1]){
        legs.push(leg);
      }
    })

    // let legs = allLegs.map(function(leg){
    //   return leg.legId === givenLegs[0] || leg.legId === givenLegs[1]
    // })

    return legs;
  },

  // SAVE FLIGHT EVENT - STORE SELECTED FLIGHT TO DATABASE ====================
  handleSaveFlight: function(event) {
    console.log('SELECTED FLIGHT: ', this.props);

    let legIdsArray = this.props.flightInfo.legIds;
    let flightLegDetailsArray = this.props.flightLegs

    let resultsArray = legIdsArray.map((leg) => {
      // console.log('leg: ', leg)
      let arr = [];
      flightLegDetailsArray.map((flightLeg) => {
        // console.log('flightLeg: ', flightLeg);
        if(leg === flightLeg.legId) {
          arr.push(flightLeg);
        }
      });
      return arr;
    });

    console.log('ARRAY =====> ', resultsArray)
    console.log('DEPART FROM: ', resultsArray[0][0])

    let dataObj = {
      status_id: 2,
      type_id: 1,
      user_email: `${this.props.userEmail}`,
      terminal: '',
      departureAirportName: resultsArray[0],
      departureAirportCode: '',
      departureAirportCity: '',
      arrivalAirportName: '',
      arrivalAirportCode: '',
      arrivalAirportCity: '',
      airline: '',
      flightNumber: '',
      ticketNumber: '',
      seatType: '',
      seatRow: '',
      seatNumber: '',
      membershipNumber: '',
      broker: '',
      departureTime: '',
      arrivalTime: ''
    };

    console.log('dataObj ====> ', dataObj);
  },

  setSingleFlight: function() {
    let legIdsArray = this.props.flightInfo.legIds;
    let flightLegDetailsArray = this.props.flightLegs;
    let segments = [];

    let resultsArray = legIdsArray.map((leg) => {
      // console.log('leg: ', leg)
      let arr = [];
      let segments = []
      flightLegDetailsArray.map((flightLeg) => {
        // console.log('flightLeg: ', flightLeg);
        if(leg === flightLeg.legId) {
          arr.push(flightLeg);
          segments.push(flightLeg.segments)
        }
      });
      return arr;
    })
    
    return [resultsArray, segments];
  },

  render() {
    // console.log('>>>>> FLIGHT <<<<<');

    // <h3>Select Your Flight</h3>
    // if(this.props !== undefined) {
    //   return (
    //     <div className="item-flight">
    //       { this.props }
    //     </div>
    //   );
    // } else {
      let legs = this.getFlightLegs();
      // console.log(legs)
      console.log('this.props: ', this.props)
      let setSingleFlight = this.setSingleFlight();
      return (
        <div className="item-flight">
          <button type="button" className="btn" onClick={this.handleSaveFlight}>
            Save Flight
          </button>

          
          <div>
            {console.log('setSingleFlight: ', setSingleFlight[0])}
            {console.log('segments: ', setSingleFlight[1])}
            {/*FROM: { setSingleFlight[0].segments[0].departureAirportCode }<br />
            TO:   { setSingleFlight[0].segments[1].arrivalAirportCode }*/}
          </div>

          <p>
            Rate: {this.props.flightInfo.totalFarePrice.formattedPrice}
          </p>

          <p>{legs[0].segments[0].departureAirportCode} to {legs[0].segments[0].arrivalAirportCode}</p>

          <p>Departure Time: {legs[0].segments[0].departureTime}</p>

          <p>Arrival Time: {legs[0].segments[0].arrivalTime}</p>
        </div>
      );
    // }
  } 
});

export default Flight;
