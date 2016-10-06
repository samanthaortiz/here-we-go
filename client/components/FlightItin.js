import React from 'react';

const FlightItin = React.createClass({
  changeDate(date) {
    let newDate = date.substring(0,10).split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },
  render() {
    console.log('rendering flight itin', this.props)
      return (
        <div className='item-flight-itin'>
          <h4>FLIGHT ITIN</h4>
          <p>from {this.props.flightItinInfo.departureAirportCode} to {this.props.flightItinInfo.arrivalAirportCode}</p>
          <p>{this.changeDate(this.props.flightItinInfo.departureTime)} to {this.changeDate(this.props.flightItinInfo.arrivalTime)}</p>
          <p>Flight Number: {this.props.flightItinInfo.flightNumber}</p>
          <p>Airline: {this.props.flightItinInfo.airline}</p>
        </div>
      );
    } 
});

export default FlightItin;