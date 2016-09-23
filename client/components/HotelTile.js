import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({
  render() {

    console.log('>>>>> HOTEL TILE <<<<<');
    console.log('Hotel: ', this.props);
    
    return (
      <div className="dashboard-container clearfix">
        {
          this.props.hotelData.expediaHotelInfo.hotelList.map((hotel) =>
            <Hotel
              key={hotel.hotelId}
              hotelInfo={hotel}
              startDate={this.props.hotelData.startDate}
              endDate={this.props.hotelData.endDate}
            />
          )
        }
      </div>
    );
  }
});

export default HotelTile;
