import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  changeDate(date) {
      let newDate = date.split("-").join("/");
      let year = newDate.slice(0,4);
      let monthDay = newDate.slice(5);
      return monthDay += '/' + year;
    },

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
  }
})

export default FlightTile;