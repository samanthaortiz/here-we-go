import React from 'react';

const HotelItin = React.createClass({

  render() {
      return (
        <div>
          {this.props.hotelInfo.providerName}
          {this.props.hotelInfo.startDate} to {this.props.hotelInfo.endDate}
          {this.props.hotelInfo.days} Days
        </div>
      );
    } 
});

export default HotelItin;