import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({
  render() {

    console.log('>>>>> HOTEL TILE <<<<<');
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< 92cf2a016897d2e4137ac3ba14ed1a22451d0aa9
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
=======
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
>>>>>>> feat(): API request for airport codes receiving data
    console.log('Hotel: ', this.props.hotelData);
=======

    console.log('Hotel tile this.props: ', this.props);
>>>>>>> chore(git st): merge conflict resolution

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
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< 92cf2a016897d2e4137ac3ba14ed1a22451d0aa9
=======
>>>>>>> feat(): API request for airport codes receiving data
=======
    console.log('Hotel tile this.props: ', this.props);
>>>>>>> feat(): API request for airport codes receiving data
    

=======
>>>>>>> chore(git st): merge conflict resolution
  }

});

export default HotelTile;
