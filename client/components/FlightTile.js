import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  render() {

<<<<<<< a17da5c7b340c98649173414a09634347557ce42
<<<<<<< cbb4940c157070a0a00b18c372c26e65a0d1daa9
=======
<<<<<<< 82b63c5604d1369cc6bc4d4e34856dfc674ccac5
>>>>>>> feat(flights): adding flights tile and component
    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight: ', this.props);

<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
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
<<<<<<< a17da5c7b340c98649173414a09634347557ce42
=======
  render(){
    let flight = this.props;
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
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
    );
>>>>>>> feat(flights): adding flights tile and component
=======
    )
>>>>>>> feat(): API request for airport codes receiving data
=======

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
>>>>>>> feat(flights): adding flights tile and component
  }

});

export default FlightTile;