import React from 'react';

const Flight = React.createClass({
  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },
  render(){
    
    console.log('>>>>> Flight <<<<<');
    console.log('Flight: ', this.props.flightInfo);

    return (
      <div className="item-flight">
        <p>
          <a href={"https://www.expedia.com/New-York-Flights.h"+this.props.flightInfo.flightId+".Flight-Information?rfrr=TG.LP.TopFlights#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
          { this.props.FlightInfo.localizedName }
          </a>
        </p>
        <p>
          <img src={'https://images.trvl-media.com' + this.props.flightInfo.largeThumbnailUrl }/>
        </p>
        <p>
          ${ this.props.flightInfo.lowRateInfo.priceToShowUsers } per night
        </p>
        <p>
          { this.props.flightInfo.shortDescription }
        </p>
      </div>
    )
  }
})

export default Flight;