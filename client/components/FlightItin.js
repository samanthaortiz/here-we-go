import React from 'react';

const FlightItin = React.createClass({

  render() {
    console.log('rendering flight itin', this.props)
      return (
        <div className='item-flight-itin'>
          <h4>FLIGHT ITIN</h4>
          <p>from {this.props.flightItinInfo.departureAirportCode} to {this.props.flightItinInfo.arrivalAirportCode}</p>
          <p>{this.props.flightItinInfo.departureTime} to {this.props.flightItinInfo.arrivalTime}</p>
          <p>Flight Number: {this.props.flightItinInfo.flightNumber}</p>
          <p>Airline: {this.props.flightItinInfo.airline}</p>
        </div>
      );
    } 
});

export default FlightItin;