// DASHBOARD > PANEL > FLIGHT TILE ============================================
import React from 'react';
import Flight from './Flight';
import ValidCodes from '../data/validFlightCodes'

const FlightTile = React.createClass({

  getAllAirports(ValidCodes) {
    // if(this.props.flightData.data.expediaFlightInfo.length !== 0) {
    //   let codes = [];

    //   this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports_by_cities.forEach(function(airport){
    //     if(ValidCodes.indexOf(airport.code) !== -1){
    //       codes.push(airport);
    //     }
    //   });

    //   this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports.forEach(function(airport){
    //     if(ValidCodes.indexOf(airport.code) !== -1){
    //       codes.push(airport);
    //     }
    //   });

    //   return codes
    // }
    let codes = {
       "processingDurationMillis": 2,
       "authorisedAPI": true,
       "success": true,
       "airline": null,
       "errorMessage": null,
       "airports": [
         {
           "code": "DAL",
           "name": "Dallas Love Fld",
           "city": "Dallas",
           "country": "United States",
           "timezone": "America/Chicago",
           "lat": 32.847111,
           "lng": -96.851778,
           "terminal": null,
           "gate": null
         },
         {
           "code": "DFW",
           "name": "Dallas Fort Worth Intl",
           "city": "Dallas-Fort Worth",
           "country": "United States",
           "timezone": "America/Chicago",
           "lat": 32.896828,
           "lng": -97.037997,
           "terminal": null,
           "gate": null
         }
       ]
     }
     return codes.airports
  },

  componentDidMount() {
    // console.log('IM IN!');
    // $('#prefetch .typeahead').on('focusout', function() {
    //   console.log('type!');
    // });

    var countries = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // url points to a json file that contains an array of country names, see
      // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
      prefetch: '../data/airports.json'
    });

    // passing in `null` for the `options` arguments will result in the default
    // options being used
    $('#prefetch .typeahead').typeahead(null, {
      name: 'countries',
      source: countries
    });
  },

  render() {

    console.log('>>>>> FLIGHT TILE <<<<<');
    // console.log('Flight this.props in flightTile: ', this.props);

    if(this.props.flightData.data.expediaFlightInfo.length !== 0) {
      let codes = this.getAllAirports(ValidCodes);
      if(codes.length > 0) {
        return (
          <div className="tile-flight">
            <h3>Choose your departure and destination airports</h3>
            <div id="prefetch">
              <label>Airport: </label>
              <input className="typeahead" />
            </div>
            {
              codes.map((airport, i) =>
                <Flight
                  key={i}
                  destAirportCode={airport.code}
                  destAirportName={airport.name}
                />
              )
            }
          </div>
        );
      }
    } else {
      return (
        <div className="tile-flight">
          <Flight />
        </div>
      );
    }
  } 
});

export default FlightTile;
