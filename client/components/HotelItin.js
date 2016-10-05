import React from 'react';

const HotelItin = React.createClass({
  componentWillMount(){
  	console.log('hotel itin props:', this.props)
  },
  render() {
  	console.log('rendering hotel itin', this.props)
      return (
      	// <div>HELLO!</div>
        <div className='item-hotel-itin'>
        <h4>HOTEL ITIN</h4>
          <h5>{this.props.hotelItinInfo.providerName}</h5>
          <p>{this.props.startDate} to {this.props.endDate}</p>
          <p>{this.props.hotelItinInfo.days} Days</p>
        </div>
      );
    } 
});

export default HotelItin;