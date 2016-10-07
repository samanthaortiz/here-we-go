// DASHBOARD > PANEL > HOTEL TILE =============================================
import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({

  componentDidMount() {
    var ulNode = document.getElementsByClassName('row');
    var liNodeList = '';
    
    for(var i = 0; i < ulNode.length; i++) {
      var liNodeList = ulNode[i].getElementsByTagName('li');
      var myWidth = liNodeList.length * 350;
      ulNode[i].style.width = myWidth + 'px';
    }
  },

  render() {

    // console.log('>>>>> HOTEL TILE <<<<<');
    // console.log('Hotel tile this.props: ',  this.props.hotelData);

    if(this.props.hotelData.length !== 0) {
      return (
        <div className="tile-hotel">
          <h3>HOTELS</h3>
          <ul className="row">
            {
              this.props.hotelData.tripData[0].hotelData.hotelList.map((hotel) =>
                <Hotel
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
