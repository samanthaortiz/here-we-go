import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  render() {

<<<<<<< 82b63c5604d1369cc6bc4d4e34856dfc674ccac5
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
    

=======
  render() {

    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight: ', this.props);
    
    return (
      <div className="tile-flight">
        {
          this.props.flightData.expediaflightInfo.flightList.map((flight) =>
            <flight
              key={flight.flightId}
              flightInfo={flight}
              startDate={this.props.flightData.startDate}
              endDate={this.props.flightData.endDate}
            />
          )
        }
      </div>
    );
>>>>>>> feat(flights): adding flights tile and component
  }

});

export default FlightTile;