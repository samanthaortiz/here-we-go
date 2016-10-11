import React from 'react';

const FlightItin = React.createClass({

  onChange(){
    if (this.props.flightItinInfo.status_id === 1){
      if (this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id] 
        = !this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id]
      } 
    } else if (this.props.flightItinInfo.status_id === 2){
      if (this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id] 
        = !this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id]
      } 
    }
  },

  changeDate(date) {
    var date1 = date.split("-").join("/")
    return date1.substring(5,10) + "/" + date1.substring(0,4)

  },

  render() {
      return (
        <div className='item-flight-itin'>
          <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" 
              onChange={this.onChange}/>
              From {this.props.flightItinInfo.departureAirportCode} 
              to {this.props.flightItinInfo.arrivalAirportCode}
              <br/>{this.changeDate(this.props.startDate)} - {this.changeDate(this.props.endDate)}
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