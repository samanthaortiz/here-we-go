import React from 'react';

const CarItin = React.createClass({
   changeDate(date) {
    let newDate = date.substring(0,10).split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  render() {
      return (
        <div className='item-car-itin'>
          <h4>CAR ITIN</h4>
          <p>{this.props.carItinInfo.rentalCompany}</p>
          <p>{this.props.carItinInfo.vehicleBrand}</p>
          <p>{this.changeDate(this.props.carItinInfo.pickUpTime)} to {this.changeDate(this.props.carItinInfo.dropOffTime)}</p>
        </div>
      );
    } 
});

export default CarItin;