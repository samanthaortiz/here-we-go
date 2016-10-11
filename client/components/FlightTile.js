// DASHBOARD > PANEL > FLIGHT TILE ============================================
import React from 'react';
import Flight from './Flight';
import ValidCodes from '../data/validFlightCodes';
import ValidAirports from '../data/validAirports'
import {ButtonToolbar} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';


const FlightTile = React.createClass({
  getInitialState: function() {
   return {
      airportDepartureCode: "",
      airportDestinationCode: "",
      availableAirportCodes: [],
      adults: 1,
      childUnder18: 0,
      infants: "false",
      // gotFlights: "false"
    }
  },

  getAllAirports(ValidCodes) {
    let codes = [];

    this.props.flightData.reducerTripData.tripData[3].airports.forEach(function(airport){
      if(ValidCodes.indexOf(airport.code) !== -1){
        codes.push(airport);
      }
    });

    this.props.flightData.reducerTripData.tripData[3].airports.forEach(function(airport){
      if(ValidCodes.indexOf(airport.code) !== -1){
        codes.push(airport);
      }
    });

    return codes
  },

  componentWillMount(){
    let codeArr = this.getAllAirports(ValidCodes) || [];
    this.setState({
      availableAirportCodes: codeArr,
      airportDepartureCode: "",
      airportDestinationCode: codeArr[0].code
    })
  },

  componentDidMount() {
    var airports = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // url points to a json file that contains an array of country names, see
      // https://github.com/twitter/typeahead.js/blob/gh-pages/data/airports.json
      prefetch: '../data/airports.json'
    });

    // passing in "null" for the "options" arguments will result in the default
    // options being used
    $('#prefetch .typeahead').typeahead(null, {
      name: 'airports',
      source: airports
    }).on('typeahead:change', this.handleChangeDeparture)
  },

  handleChangeDestination(event) {
    this.setState({
      airportDestinationCode: event.target.value
    });
  },

  handleChangeDeparture(event) {
    let code = "";
    ValidAirports.forEach(function(airport){
      if (airport.name === event.target.value){
        code = airport.code;
      }
    })
    this.setState({
      airportDepartureCode: code
    });
  },

  handleChangeAdults(event) {
    this.setState({
      adults: +event.target.value
    });
  },


  handleChangechildUnder18(event) {
    if(event.target.value === "true"){
      this.setState({
        childUnder18: 1
      });
    } else if(event.target.value === "false"){
      this.setState({
        childUnder18: 0
      });
    }
  },

  handleChangeInfants(event) {
    this.setState({
      infants: event.target.value
    });
  },

  onSubmit(e) {
    e.preventDefault();
    document.getElementById('loading-icon').style.display = 'inline-block';
    this.props.flightData.postFlightExpedia(
      this.state.airportDepartureCode, 
      this.state.airportDestinationCode, 
      this.props.flightData.reducerTripData.startDate, 
      this.props.flightData.reducerTripData.endDate, 
      this.state.adults, 
      this.state.childUnder18, 
      this.state.infants
      )
    this.props.flightOptions.gotFlights = true;
  },

  renderFlights(offers, legs) {
    return (
      <div className="tile-flight">
        <h3>FLIGHTS</h3>
        <ul className="row">
          {
            offers.map((flight) =>
              <Flight
                {...this.props}
                key={flight.productKey}
                flightInfo={flight}
                flightLegs={legs}
                userEmail={this.props.userEmail}
              />
            )
          }
        </ul>
      </div>
    )
  },

    render() {
      // console.log('FLIGHT TILE: ', this.props);
      // console.log('do we have flights?', this.props.flightOptions);
      if(this.state.availableAirportCodes.length === 0){
        return (
          <div className="tile-flight">
            <h3>No Flights Available</h3>
          </div>
        )
      }

      if(this.props.flightOptions.gotFlights === false) {
        return (

          <div className="tile-flight">

            <h3>FLIGHTS</h3>
            <form className="airportForm clearfix" onSubmit={this.onSubmit}>
              <h4>Select your Departure and Destination Airports</h4>
              <ul className="flight-form-fields">
                <li>
                  <div id="prefetch">
                    <label htmlFor="depart">Departure Airport:</label>
                    <input 
                      value={this.props.flightOptions.airportDepartureCode} 
                      className="typeahead" 
                      ref="depart"
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="destination">Destination Airport:</label>
                  <select 
                    ref="destination" 
                    value={this.props.airportDestinationCode} 
                    onChange={this.handleChangeDestination}>
                    {this.state.availableAirportCodes.map((airport, i) => 
                      <option 
                        key={airport.code} 
                        value={airport.code}>{airport.name}: {airport.code}
                      </option>
                    )}
                  </select>
                </li>
                <li className="form-options">
                  <div>
                    <label htmlFor="adults">Number of Adults: </label>
                    <input 
                      className="numAdults" 
                      value={this.state.adults} 
                      ref="adults" 
                      onChange={this.handleChangeAdults}
                    />
                  </div>
                  <div>
                    <label htmlFor="childUnder18">Child traveling? </label>
                    <select 
                      ref="childUnder18" 
                      value={this.props.flightOptions.childUnder18} 
                      onChange={this.handleChangechildUnder18}>
                      <option 
                        key="false" 
                        value="false">
                        No
                      </option>
                      <option 
                        key="true" 
                        value="true">
                        Yes
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="infants">Infant on Lap? </label>
                    <select 
                      className="infants" 
                      ref="infants" 
                      value={this.props.flightOptions.infants} 
                      onChange={this.handleChangeInfants}>
                        <option 
                          key="false" 
                          value="false">
                          No
                        </option>
                        <option 
                          key="true" 
                          value="true">
                          Yes
                        </option>
                    </select> 
                  </div>
                </li>
              </ul>
              <button type="submit">Let's Fly!</button>
              <div id='loading-icon'>Getting Flights...</div>
            </form>

          </div>

        );
      } else return(<div>{this.renderFlights(this.props.flightOffers, this.props.flightLegs)}</div>) 
    }
});
export default FlightTile;
