import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({
  render() {

    console.log('>>>>> HOTEL TILE <<<<<');
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
    console.log('Hotel: ', this.props.hotelData);

    if(this.props.hotelData.length === 0) {
      return (
        <div className="tile-hotel">
          <Hotel />
        </div>
      );
    } else {
      return (
        <div className="tile-hotel">
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
=======
    console.log('Hotel tile this.props: ', this.props);
>>>>>>> feat(): API request for airport codes receiving data
    

  }

});

export default HotelTile;
