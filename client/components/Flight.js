import React from 'react';

const Flight = React.createClass({
  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },
  render() {

    console.log('>>>>> FLIGHT <<<<<');
    console.log('Flight: ', this.props);

    if(this.props.hotelInfo === undefined) {
      return (
        <div className="item-flight">
          Select Flight!
        </div>
      );
    } else {
      return (
        <div className="item-flight">
          Fight Info Goes Here
        </div>
      );
    }
  }
})

export default Flight;