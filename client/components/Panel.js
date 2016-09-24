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
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< 92cf2a016897d2e4137ac3ba14ed1a22451d0aa9
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
=======
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
>>>>>>> feat(): API request for airport codes receiving data
        <FlightTile flightData={this.props} />
        { 
          /*
=======

        { /*
>>>>>>> feat(): API request for airport codes receiving data
          <CarRentals/>
          <Activities/>
=======
        <FlightTile flightData={this.props} />
<<<<<<< f6f7a38780bb45dce246e451978335ff47ad2342
        /*
        <CarRentals/>
        <Activities/>
>>>>>>> chore(git st): merge conflict resolution
          */
=======
>>>>>>> fix(fixed dashboard/account view):
      </div>
    );
  }
});

export default Panel;
