// DASHBOARD > PANEL > FLIGHT TILE >  FLIGHT ==================================
import React from 'react';

const Flight = React.createClass({
  getInitialState: function() {
    return {
      roundTrip: [],
      airlineLogos: {
        'American Airlines': '../assets/airline-logos/AA_sq.jpg',
        'Delta': '../assets/airline-logos/DL_sq.jpg',
        'jetBlue': '../assets/airline-logos/b6_sq.jpg',
        'United': '../assets/airline-logos/UA_sq.jpg',
        'Unknown': '../assets/airline-logos/multiple_airlines_logo_sq.jpg'
      }
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

    var userEmail = this.props.userEmail
    var postFlightItin = this.props.postFlightItin
  
    let dataObj = {
      type_id: 1,
      user_email: `${this.props.userEmail.split("=")[1].split("#")[0]}`,
      terminal: '',
      status_id: 2,
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

    $.ajax({
      url: '/flightReservation',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json',
      success: function (data) {
        postFlightItin(userEmail, '/dashboard')

      },
      error: function (data) {
        console.error('ERROR SENDING TO DATABASE: ', data);
      }
    });
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
    let airlineImgLogo = this.state.airlineLogos.Unknown;
    for (var key in this.state.airlineLogos) {
      if(key === this.state.roundTrip[0].segments[0].airlineName) {
        airlineImgLogo = this.state.airlineLogos[key];
      }
    }

    return (
      <li className="item-flight">
        <div className="crop">
          <div className="air-img">
            <img src={ airlineImgLogo } />
          </div>
          <div className="air-price">
            ${this.props.flightInfo.totalFare}<span>Round Trip</span>
          </div>
        </div>
        <div className="details clearfix">
          <div className="air-depart">
            <p>Flight #{ this.state.roundTrip[0].segments[0].flightNumber }</p>
            <span>{ this.state.roundTrip[0].segments[0].departureAirportCode } 
              to { this.state.roundTrip[0].segments[this.state.roundTrip[0].segments.length - 1].arrivalAirportCode }
            </span>
            <p>{ this.state.roundTrip[0].segments[0].departureTime }</p>
          </div>
          <div className="air-return">
            <p>Flight #{ this.state.roundTrip[1].segments[0].flightNumber }</p>
            <span>{ this.state.roundTrip[1].segments[0].departureAirportCode } 
              to { this.state.roundTrip[1].segments[this.state.roundTrip[1].segments.length - 1].arrivalAirportCode }
            </span>
            <p>{ this.state.roundTrip[1].segments[0].departureTime }</p>
          </div>
          <div className="clearfix">
            <button 
              type="button" 
              className="btn" 
              onClick={this.handleSaveFlight}>Save Flight
            </button>
          </div>
        </div>
      </li>
    );
  } 
});

export default Flight;