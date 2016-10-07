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

  // SAVE FLIGHT EVENT - STORE SELECTED FLIGHT TO DATABASE ====================
  handleSaveFlight: function(event) {

    console.log('SAVE: ', this.state);

    let dataObj = {
      status_id: 2,
      type_id: 1,
      user_email: `${this.props.userEmail.split("=")[1].split("#")[0]}`,
      terminal: '',
      departureAirportName: '',
      departureAirportCode: this.state.roundTrip[0].segments[0].departureAirportCode,
      departureAirportCity: this.state.roundTrip[0].segments[0].departureAirportAddress.city,
      arrivalAirportName: '',
      arrivalAirportCode: this.state.roundTrip[0].segments[this.state.roundTrip[0].segments.length - 1].arrivalAirportCode,
      arrivalAirportCity: this.state.roundTrip[0].segments[this.state.roundTrip[0].segments.length - 1].arrivalAirportAddress.city,
      airline: this.state.roundTrip[0].segments[0].airlineName,
      flightNumber: this.state.roundTrip[0].segments[0].flightNumber,
      ticketNumber: '',
      seatType: this.props.flightInfo.segmentAttributes[0].cabinCode,
      seatRow: '',
      seatNumber: '',
      membershipNumber: '',
      broker: '',
      departureTime: this.state.roundTrip[0].segments[0].departureTime,
      arrivalTime: this.state.roundTrip[0].segments[this.state.roundTrip[0].segments.length - 1].arrivalTime
    };

    // $.ajax({
    //   url: '/flightReservation',
    //   type: 'POST',
    //   data: JSON.stringify(dataObj),
    //   contentType: 'application/json',
    //   success: function (data) {
    //     // // Trigger a fetch to update the messages, pass true to animate
    //     // app.fetch();
    //   },
    //   error: function (data) {
    //     console.error('ERROR SENDING TO DATABASE: ', data);
    //   }
    // });
  },

  getRoundTrip: function() {
    let legIdsArray = this.props.flightInfo.legIds;
    let flightLegDetailsArray = this.props.flightLegs;
    let roundTrip = [];

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
      console.log('FLIGHT this.props: ', this.props);

      return (
        <li className="item-flight">
          <div className="crop">
            <div className="air-img"><img src="https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/s/UA_sq.jpg" /></div>
            <div className="air-price">${this.props.flightInfo.totalFare}<span>Round Trip</span></div>
          </div>
          <div className="details clearfix">
            <div className="air-depart">
              <p>{ this.state.roundTrip[0].segments[0].flightNumber }</p>
              <span>{ this.state.roundTrip[0].segments[0].departureAirportCode } to { this.state.roundTrip[0].segments[this.state.roundTrip[0].segments.length - 1].arrivalAirportCode }</span>
              <p>{ this.state.roundTrip[0].segments[0].departureTime }</p>
            </div>
            <div className="air-return">
              <p>{ this.state.roundTrip[1].segments[0].flightNumber }</p>
              <span>{ this.state.roundTrip[1].segments[0].departureAirportCode } to { this.state.roundTrip[1].segments[this.state.roundTrip[1].segments.length - 1].arrivalAirportCode }</span>
              <p>{ this.state.roundTrip[1].segments[0].departureTime }</p>
            </div>
            
            <button type="button" className="btn" onClick={this.handleSaveFlight}>Save Flight</button>
          </div>
        </li>
      );
    // }
  } 
});

export default Flight;
