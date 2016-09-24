import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  render() {

<<<<<<< 82b63c5604d1369cc6bc4d4e34856dfc674ccac5
    console.log('>>>>> FLIGHT TILE <<<<<');
    console.log('Flight: ', this.props);

<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
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
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
    );
>>>>>>> feat(flights): adding flights tile and component
=======
    )
>>>>>>> feat(): API request for airport codes receiving data
  }

});

export default FlightTile;