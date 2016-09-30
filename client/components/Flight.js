// DASHBOARD > PANEL > FLIGHT TILE >  FLIGHT ==================================
import React from 'react';

const Flight = React.createClass({
  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
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
      return (
        <div className="item-flight">
        <p>{this.props.flightInfo.baseFare}</p>
        </div>
      );
    // }
  } 
});

export default Flight;
