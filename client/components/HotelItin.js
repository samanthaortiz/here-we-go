// DASHBOARD > PANEL > HOTELItin TILE > HOTELItin =====================================
import React from 'react';

const HotelItin = React.createClass({

  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  render() {
    
    // console.log('>>>>> HOTELItin <<<<<');
    // console.log('HotelItin: ', this.props.hotelItinInfo);

    if(this.props.hotelItinInfo !== undefined) {
      return (
        <div className="item-hotelItin">
          <button type="button" className="btn">Save HotelItin</button>
          <p>
            <a href={"https://www.expedia.com/New-York-HotelItins.h"+this.props.hotelItinInfo.hotelItinId+".HotelItin-Information?rfrr=TG.LP.TopHotelItins#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
            { this.props.hotelItinInfo.localizedName }
            </a>
          </p>
          <p>
            <img src={'https://images.trvl-media.com' + this.props.hotelItinInfo.largeThumbnailUrl }/>
          </p>
          <p>
            ${ this.props.hotelItinInfo.lowRateInfo.priceToShowUsers } per night
          </p>
          <p>
            { this.props.hotelItinInfo.shortDescription }
          </p>
        </div>
      );
    } else {
      return (
        <div className="item-hotelItin">
          <h3>Select Your HotelItin</h3>
        </div>
      );
    }
  }
});

export default HotelItin;