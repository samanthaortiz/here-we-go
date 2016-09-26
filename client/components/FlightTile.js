import React from 'react';
import Flight from './Flight';
import Valid from '../data/validFlightCodes'

const FlightTile = React.createClass({

  // componentWillMount(){
    
  //   console.log(codeArr);
  //   // this.props.postFlightExpedia(codeArr, this.props.startDate, this.props.endDate);
  // },

  render() {
    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight this.props in flightTile: ', this.props);
    // if(this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports_by_cities.length === 0 || 'test' === 'test') {
    //   return (
    //     <div className="tile-flight">
    //       <Flight />
    //     </div>
    //   );
    // } else {
    var codeArr = [];
    this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports_by_cities.forEach(function(airport){
      if(Valid.indexOf(airport.code) !== -1){
        codeArr.push(airport);
      }
    });
      return (
        <div className="tile-flight">
          {
            codeArr.map((airport, i) =>
                <Flight
                  key={i}
                  airportCode={airport.code}
                  airportName={airport.name}
                />
            
            )
          }
        </div>
      );
    }
  // }
});  
export default FlightTile;