// DASHBOARD > PANEL > FLIGHT TILE >  FLIGHT ==================================
import React from 'react';

const Flight = React.createClass({
  getInitialState: function() {
    return {
      roundTrip: []
    };

  },

  componentWillMount() {
    this.setState({
      roundTrip: this.getRoundTrip()
    });
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
    console.log('SELECTED FLIGHT: ', this.state.roundTrip);

    

    let dataObj = {
      status_id: 2,
      type_id: 1,
      user_email: `${this.props.userEmail}`,
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

    console.log('dataObj ====> ', dataObj);
  },

  getRoundTrip: function() {
    let legIdsArray = this.props.flightInfo.legIds;
    let flightLegDetailsArray = this.props.flightLegs;
    let roundTrip = [];

    // console.log('legIdsArray: ', legIdsArray);
    // console.log('flightLegDetailsArray: ', flightLegDetailsArray);

    flightLegDetailsArray.forEach((flightLeg) => {
      if (legIdsArray[0] === flightLeg.legId) {
        roundTrip[0] = flightLeg;
        console.log(`FROM: ${legIdsArray[0]}:${flightLeg.legId}`);
      }
      if (legIdsArray[1] === flightLeg.legId) {
        roundTrip[1] = flightLeg;
        console.log(`TO: ${legIdsArray[1]}:${flightLeg.legId}`);
      }
    });

    return roundTrip;
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
      // let legs = this.getFlightLegs();
      // console.log(legs)
      console.log('this.props: ', this.props)
      // let roundTrip = this.getRoundTrip();
      return (
        <div className="item-flight clearfix">
          <div>
            {/*console.log('roundTrip ====> ', roundTrip)}
            {console.log('TO ====> ', roundTrip[0])}
            {console.log('FROM ====> ', roundTrip[1])*/}

            <h4>TO: { this.state.roundTrip[0].segments[0].flightNumber }</h4>
            <p>DATE: { this.state.roundTrip[0].segments[0].departureTime }</p>
            <p>FROM: { this.state.roundTrip[0].segments[0].departureAirportCode }, TO: { this.state.roundTrip[0].segments[this.state.roundTrip[0].segments.length - 1].arrivalAirportCode }</p>

            <h4>RETURN: { this.state.roundTrip[1].segments[0].flightNumber }</h4>
            <p>DATE: { this.state.roundTrip[1].segments[0].departureTime }</p>
            <p>FROM: { this.state.roundTrip[1].segments[0].departureAirportCode }, TO: { this.state.roundTrip[1].segments[this.state.roundTrip[1].segments.length - 1].arrivalAirportCode }</p>

            <p>PRICE: {this.props.flightInfo.totalFare} </p>
          </div>
          <button type="button" className="btn" onClick={this.handleSaveFlight}>
            Save Flight
          </button>

          {/*<p>Rate: {this.props.flightInfo.totalFarePrice.formattedPrice}</p>
          <p>{legs[0].segments[0].departureAirportCode} to {legs[0].segments[0].arrivalAirportCode}</p>
          <p>Departure Time: {legs[0].segments[0].departureTime}</p>
          <p>Arrival Time: {legs[0].segments[0].arrivalTime}</p>*/}
        </div>
      );
    // }
  } 
});

export default Flight;
