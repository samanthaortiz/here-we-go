import React from 'react';

const FlightItin = React.createClass({

  onChange(){
    if (this.props.flightItinInfo.status_id === 1){
      if (this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id] = !this.props.dashboardState.itinItems[0].selectedBookedFlights[this.props.flightItinInfo.id]
      } 
      console.log('this is the dash state for booked flight itin: ', this.props.dashboardState.itinItems[0].selectedBookedFlights)   
    } else if (this.props.flightItinInfo.status_id === 2){
      if (this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id] = !this.props.dashboardState.itinItems[1].selectedSavedFlights[this.props.flightItinInfo.id]
      } 
      console.log('this is the dash state for saved flight itin: ', this.props.dashboardState.itinItems[1].selectedSavedFlights)   

    }
  },


  // changeDate(date) {
  //   var 
  //   //check for iso status here?
  //   if(date === "0000-00-00 00:00:00"){
  //     return 
  //   }
  //   var string = new Date(date).toString()
  //   var formattedDate = string.substring(4,10) + ", " + string.substring(11, 15);
  //   return formattedDate
  // },

  render() {
      return (
        <div className='item-flight-itin'>
          <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" 
              onChange={this.onChange}/>
              From {this.props.flightItinInfo.departureAirportCode} to {this.props.flightItinInfo.arrivalAirportCode}
              {/*<br/>{this.changeDate(this.props.flightItinInfo.departureTime)}*/}
              <br/>{this.props.startDate}
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