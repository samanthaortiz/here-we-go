import React from 'react';
import Flight from './Flight';

const FlightTile = React.createClass({
  changeDate(date) {
      let newDate = date.split("-").join("/");
      let year = newDate.slice(0,4);
      let monthDay = newDate.slice(5);
      return monthDay += '/' + year;
    },

  render(){
    let flight = this.props;

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
    )
  }
})

export default FlightTile;