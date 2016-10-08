// DASHBOARD > PANEL > HOTEL TILE =============================================
import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({

  render() {
    if(this.props.hotelData.length !== 0) {
      return (
        <div className="tile-hotel">
          <h3>HOTELS</h3>
          <ul className="row">
            {
              this.props.hotelData.tripData[0].hotelData.hotelList.map((hotel) =>
                <Hotel
                  {...this.props}
                  key={hotel.hotelId}
                  hotelInfo={hotel}
                  isLoggedIn={this.props.hotelData.loggedIn}
                  userEmail={this.props.hotelData.email}
                  startDate={this.props.hotelData.startDate}
                  endDate={this.props.hotelData.endDate}
                />
              )
            }
          </ul>
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
