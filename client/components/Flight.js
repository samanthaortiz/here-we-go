import React from 'react';

const Flight = React.createClass({
  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },
<<<<<<< a17da5c7b340c98649173414a09634347557ce42
<<<<<<< 92cf2a016897d2e4137ac3ba14ed1a22451d0aa9
<<<<<<< cbb4940c157070a0a00b18c372c26e65a0d1daa9
=======
>>>>>>> chore(git st): merge conflict resolution
=======
<<<<<<< 82b63c5604d1369cc6bc4d4e34856dfc674ccac5
>>>>>>> feat(flights): adding flights tile and component
  render() {

    console.log('>>>>> FLIGHT <<<<<');
    console.log('Flight: ', this.props);

    if(this.props.hotelInfo === undefined) {
      return (
        <div className="item-flight">
          Select Flight!
        </div>
      );
    } else {
      return (
        <div className="item-flight">
          Fight Info Goes Here
        </div>
      );
    }
<<<<<<< a17da5c7b340c98649173414a09634347557ce42
<<<<<<< 92cf2a016897d2e4137ac3ba14ed1a22451d0aa9
=======
>>>>>>> feat(flights): adding flights tile and component
=======
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
>>>>>>> feat(flights): adding flights tile and component
<<<<<<< a17da5c7b340c98649173414a09634347557ce42
=======
>>>>>>> chore(git st): merge conflict resolution
=======
>>>>>>> feat(flights): adding flights tile and component
  }
})

export default Flight;