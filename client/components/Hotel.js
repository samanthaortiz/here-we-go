// DASHBOARD > PANEL > HOTEL TILE > HOTEL =====================================
import React from 'react';

const Hotel = React.createClass({

  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  render() {
    
    // console.log('>>>>> HOTEL <<<<<');
    // console.log('Hotel: ', this.props.hotelInfo);

    if(this.props.hotelInfo !== undefined) {
      return (
        <div className="item-hotel">
          <button type="button" className="btn">Save Hotel</button>
          <p>
            <a href={"https://www.expedia.com/New-York-Hotels.h"+this.props.hotelInfo.hotelId+".Hotel-Information?rfrr=TG.LP.TopHotels#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
            { this.props.hotelInfo.localizedName }
            </a>
          </p>
          <p>
            <img src={'https://images.trvl-media.com' + this.props.hotelInfo.largeThumbnailUrl }/>
          </p>
          <p>
            ${ this.props.hotelInfo.lowRateInfo.priceToShowUsers } per night
          </p>
          <p>
            { this.props.hotelInfo.shortDescription }
          </p>
        </div>
      );
    } else {
      return (
        <div className="item-hotel">
          <h3>Select Your Hotel</h3>
        </div>
      );
    }
  }
});

export default Hotel;