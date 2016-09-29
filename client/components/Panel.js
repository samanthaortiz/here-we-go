// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';

const Panel = React.createClass({

  
  render() {

    console.log('>>>>> PANEL <<<<<');
    console.log('*****Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);
    console.log('****Activities***: ', this.props);


    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.expediaHotelInfo} />
        <FlightTile flightData={this.props} />
        <CarRentalTile carData={this.props}/>
        <ActivityTile activityData={this.props}/>
      </div>
    );
  }
});

export default Panel;
