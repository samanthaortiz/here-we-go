import React from 'react';

const FlightItin = React.createClass({

  render() {
      return (
        <div>
          from {this.props.flightInfo.departureAirportCode} to {this.props.flightInfo.arrivalAirportCode}
          {this.props.flightInfo.departureTime} to {this.props.flightInfo.arrivalTime}
          Flight Number: {this.props.flightInfo.flightNumber}
          Airline: {this.props.flightInfo.airline}
        </div>
      );
    } 
});

export default FlightItin;