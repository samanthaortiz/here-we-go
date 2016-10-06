import React from 'react';

const FlightItin = React.createClass({
  onChange(){
    if (this.props.dashboardState.selectedBookedFlights[this.props.flightItinInfo.id] === undefined){
      this.props.dashboardState.selectedBookedFlights[this.props.flightItinInfo.id] = true;
    } else {
      this.props.dashboardState.selectedBookedFlights[this.props.flightItinInfo.id] = !this.props.dashboardState.selectedBookedFlights[this.props.flightItinInfo.id]
    } 
    console.log('this is the dash state for booked flight itin: ', this.props.dashboardState.selectedBookedFlights)
  },

  changeDate(date) {
    var string = new Date(date).toString()
    var formattedDate = string.substring(4,10) + ", " + string.substring(11, 15);
    return formattedDate
  },

  render() {
      return (
        <div className='item-flight-itin'>
        <h4>FLIGHT ITIN</h4>
          <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" 
              onChange={this.onChange}/>
              From {this.props.flightItinInfo.departureAirportCode} to {this.props.flightItinInfo.arrivalAirportCode}
              <br/>{this.changeDate(this.props.flightItinInfo.departureTime)}
              <br/>Flight Number: {this.props.flightItinInfo.flightNumber}
              <br/>Airline: {this.props.flightItinInfo.airline}
            </label>
          </div>
        </form>
      </div>
      );
    } 
});

export default FlightItin;