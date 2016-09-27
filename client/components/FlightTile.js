import React from 'react';
import Flight from './Flight';
// import Valid from '../data/validAirports';
import ValidCodes from '../data/validFlightCodes'
// import All from '../data/fullAirportList';
// import Bloodhound from "bloodhound-js";
// import $ from "jquery";
// import { typeahead } from '../../bower_components/typeahead.js/dist/typeahead.jquery';


const FlightTile = React.createClass({

  getAllAirports(ValidCodes){
    let codes = [];

    this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports_by_cities.forEach(function(airport){
      if(ValidCodes.indexOf(airport.code) !== -1){
        codes.push(airport);
      }
    });

    this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports.forEach(function(airport){
      if(ValidCodes.indexOf(airport.code) !== -1){
        codes.push(airport);
      }
    });

    return codes
  },

  componentDidMount() {
    console.log('IM IN!');
    $('#prefetch .typeahead').on('focusout', function() {
      console.log('type!');
    });

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
<<<<<<< HEAD
<<<<<<< 089f2ed5cafd088cd52c8001fbadb2dbfb597189

<<<<<<< a17da5c7b340c98649173414a09634347557ce42
<<<<<<< cbb4940c157070a0a00b18c372c26e65a0d1daa9
=======
<<<<<<< 82b63c5604d1369cc6bc4d4e34856dfc674ccac5
>>>>>>> feat(flights): adding flights tile and component
    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight: ', this.props);

<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
=======
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
>>>>>>> feat(): API request for airport codes receiving data
=======
    console.log('>>>>> FLIGHT TILE <<<<<');
<<<<<<< HEAD
    console.log('Flight: ', this.props);
>>>>>>> chore(merge): merge conflicts resolved
=======
    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight: ', this.props);
>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
    if(this.props.flightData.length === 0 || 'test' === 'test') {
=======
    console.log('Flight this.props in flightTile: ', this.props);
    
    let codes = this.getAllAirports(ValidCodes);

    if(codes.length > 0){
>>>>>>> feature
      return (
        <div className="tile-flight">
          <h3>Choose your departure and destination airports</h3>
          <div id="prefetch">
            <label htmlFor="tagss">Airport</label>
            <input className="typeahead" ref="tagss"/>
          </div>
            {codes.map((airport, i) =>
                <Flight
                  key={i}
                  destAirportCode={airport.code}
                  destAirportName={airport.name}
                />
            )}
        </div>
      );
    } else {
      return (
        <div className="tile-flight">
          <h3>No Flights Available</h3>
        </div>
        )
    }
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< 9b60c92a8bb168930f2bc48b4f60aa1cc2008078
    
<<<<<<< 089f2ed5cafd088cd52c8001fbadb2dbfb597189

=======
  render() {
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< a17da5c7b340c98649173414a09634347557ce42
=======
>>>>>>> feat(): API request for airport codes receiving data
=======
  render(){
    let flight = this.props;
>>>>>>> feat(): API request for airport codes receiving data
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176

    return (
      <div className="tile-flight">
        {/*<p>
                  <a href={"https://www.expedia.com/New-York-Flights.h"+this.props.flightInfo.flightId+".Flight-Information?rfrr=TG.LP.TopFlights#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
                  { this.props.flightInfo.localizedName }
                  </a>
                </p>
                <p>
                  <img src={'https://images.trvl-media.com' + this.props.flightInfo.largeThumbnailUrl }/>
                </p>
                <p>
                  From ${ this.props.flightInfo.lowRateInfo.priceToShowUsers } per night
                </p>
                <p>
                  { this.props.flightInfo.shortDescription }
                </p>*/}
      </div>
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
    );
>>>>>>> feat(flights): adding flights tile and component
=======
    )
>>>>>>> feat(): API request for airport codes receiving data
=======
=======
>>>>>>> feat(): API request for airport codes receiving data

    return (
      <div className="tile-flight">
        {/*<p>
                  <a href={"https://www.expedia.com/New-York-Flights.h"+this.props.flightInfo.flightId+".Flight-Information?rfrr=TG.LP.TopFlights#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
                  { this.props.flightInfo.localizedName }
                  </a>
                </p>
                <p>
                  <img src={'https://images.trvl-media.com' + this.props.flightInfo.largeThumbnailUrl }/>
                </p>
                <p>
                  From ${ this.props.flightInfo.lowRateInfo.priceToShowUsers } per night
                </p>
                <p>
                  { this.props.flightInfo.shortDescription }
                </p>*/}
      </div>
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
    );
>>>>>>> feat(flights): adding flights tile and component
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
>>>>>>> feat(flights): adding flights tile and component
=======
=======
    )
>>>>>>> feat(): API request for airport codes receiving data
>>>>>>> feat(): API request for airport codes receiving data
  }

});

=======
>>>>>>> chore(merge): merge conflicts resolved
=======
  }
});  
>>>>>>> refactor(): refactored flights and hotels
=======
  }
=======
>>>>>>> feature
});  
>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
export default FlightTile;