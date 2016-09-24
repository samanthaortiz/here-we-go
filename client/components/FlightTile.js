import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  render() {
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
    console.log('Flight: ', this.props);
>>>>>>> chore(merge): merge conflicts resolved
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
export default FlightTile;