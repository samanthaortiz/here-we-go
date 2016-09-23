import React from 'react';

const Hotel = React.createClass({
  changeDate(date) {
      let newDate = date.split("-").join("/");
      let year = newDate.slice(0,4);
      let monthDay = newDate.slice(5);
      return monthDay += '/' + year;
    },

  render(){
    let hotel = this.props;
    // console.log('hotel',hotel);
    


    return (
      <div className="tile-hotel">
        <p>
          <a href={"https://www.expedia.com/New-York-Hotels.h"+this.props.hotelInfo.hotelId+".Hotel-Information?rfrr=TG.LP.TopHotels#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
          { this.props.hotelInfo.localizedName }
          </a>
        </p>
        <p>
          <img src={'https://images.trvl-media.com' + this.props.hotelInfo.largeThumbnailUrl }/>
        </p>
        <p>
          From ${ this.props.hotelInfo.lowRateInfo.priceToShowUsers } per night
        </p>
        <p>
          { this.props.hotelInfo.shortDescription }
        </p>
      </div>
    )
  }
})

export default Hotel;