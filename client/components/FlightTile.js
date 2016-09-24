import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  render() {
    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight: ', this.props);
    if(this.props.flightData.length === 0 || 'test' === 'test') {
      return (
        <div className="tile-flight">
          <Flight />
        </div>
      );
    } else {
      return (
        <div className="tile-flight">
          {
            this.props.flightData.map((flight) =>
              <Flight
                key={flight.hotelId}
                hotelInfo={flight}
                startDate={this.props.hotelData.startDate}
                endDate={this.props.hotelData.endDate}
              />
            )
          }
        </div>
      );
    }
    
export default FlightTile;