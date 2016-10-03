// DASHBOARD > PANEL > HOTEL TILE =============================================
import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({
  render() {

    // console.log('>>>>> HOTEL TILE <<<<<');
    // console.log('Hotel tile this.props: ',  this.props);

    if(this.props.hotelData.length !== 0) {
      return (
        <div className="tile-hotel">
        <h3>HOTELS</h3>
          {
            this.props.hotelData.tripData[0].hotelData.hotelList.map((hotel) =>
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
    } else {
      return (
        <div className="tile-hotel">
          <Hotel />
        </div>
      );
    }

  }
});

export default HotelTile;
