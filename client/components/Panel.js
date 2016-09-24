// DASHBOARD PANEL ============================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';

        // <FlightTile flightData={this.props} />

const Panel = React.createClass({
  render() {
    
    console.log('>>>>> PANEL <<<<<');
    console.log('this.props.data.expediaFlightInfo.locationForFlightSearch in panel: ', this.props.data.expediaFlightInfo.locationForFlightSearch);
    // console.log('Flights: ', this.props.expediaFlightInfo);

    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.expediaHotelInfo} />
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
        <FlightTile flightData={this.props} />
        { 
          /*
=======

        { /*
>>>>>>> feat(): API request for airport codes receiving data
          <CarRentals/>
          <Activities/>
          */
        }
      </div>
    );
  }
});

export default Panel;
