// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import CarRentalTile from './CarRentalTile';

const Panel = React.createClass({
  render() {

    console.log('>>>>> PANEL <<<<<');
    // console.log('Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);

    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.expediaHotelInfo} />
        <FlightTile flightData={this.props} />
        <CarRentalTile carData={this.props}/>
      </div>
    );
  }
});

export default Panel;
