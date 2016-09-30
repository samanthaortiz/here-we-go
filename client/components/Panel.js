// DASHBOARD > PANEL ==========================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
import CarRentalTile from './CarRentalTile';
import ActivityTile from './ActivityTile';

const Panel = React.createClass({

  
  render() {

    console.log('>>>>> PANEL <<<<<');
    // console.log('*****Hotel: ', this.props.data.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);
    console.log('hotel data ===> ', this.props)
    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.reducerTripData} />
        <FlightTile flightData={this.props} />
        <CarRentalTile carData={this.props.data.reducerTripData}/>
        <ActivityTile activityData={this.props.data.reducerTripData}/>
      </div>
    );
  }
});

export default Panel;
