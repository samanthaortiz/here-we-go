import React from 'react';

const HotelItin = React.createClass({
  componentWillMount(){
  	console.log('hotel itin props:', this.props)
  },

  changeDate(date) {
    let newDate = date.substring(0,10).split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  render() {
  	console.log('rendering hotel itin', this.props)
      return (
      	// <div>HELLO!</div>
        <div className='item-hotel-itin'>
        <h4>HOTEL ITIN</h4>
          <h5>{this.props.hotelItinInfo.providerName}</h5>
          <p>{this.changeDate(this.props.hotelItinInfo.startDate)} to {this.changeDate(this.props.hotelItinInfo.endDate)}</p>
          <p>{this.props.hotelItinInfo.days} Days</p>
        </div>
      );
    } 
});

export default HotelItin;