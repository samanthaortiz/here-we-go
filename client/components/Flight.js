// DASHBOARD > PANEL > FLIGHT TILE >  FLIGHT ==================================
import React from 'react';

const Flight = React.createClass({
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

  render() {
          // <h3>Select Your Flight</h3>

    console.log('>>>>> FLIGHT <<<<<');
    console.log('Flight this.props: ', this.props);

    // if(this.props !== undefined) {
    //   return (
    //     <div className="item-flight">
    //       { this.props }
    //     </div>
    //   );
    // } else {
      let legs = this.getFlightLegs();
      console.log(legs)
      return (
        <div className="item-flight">
        <p>Rate: {this.props.flightInfo.totalFarePrice.formattedPrice}</p>
        <p>{legs[0].segments[0].departureAirportCode} to {legs[0].segments[0].arrivalAirportCode}</p>
        <p>Departure Time: {legs[0].segments[0].departureTime}</p>
        <p>Arrival Time: {legs[0].segments[0].arrivalTime}</p>

        </div>
      );
    // }
  } 
});

export default Flight;
