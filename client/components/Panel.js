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
<<<<<<< b64969dd608a8b2b35b3ac5d375dca4b939dfd4e
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
        <FlightTile flightData={this.props} />
<<<<<<< HEAD
        { 
          /*
=======

        { /*
>>>>>>> feat(): API request for airport codes receiving data
          <CarRentals/>
          <Activities/>
=======
        <FlightTile flightData={this.props} />
<<<<<<< 535f92954c672a39e7b6a0422981653e3e6a8b26
        /*
        <CarRentals/>
        <Activities/>
>>>>>>> chore(git st): merge conflict resolution
          */
=======
>>>>>>> fix(fixed dashboard/account view):
=======
>>>>>>> 2841373c1f21d64a8c40e0907724229117ca5c7e
      </div>
    );
  }
});

export default Panel;
