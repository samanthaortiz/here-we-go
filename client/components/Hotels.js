import React from 'react';

const Hotel = React.createClass({
  render(){
    var hotel = this.props;
    return (
      <div className="tile-hotel">
        <p>
          <a href={"https://www.expedia.com/New-York-Hotels.h"+this.props.hotelInfo.hotelId+".Hotel-Information?rfrr=TG.LP.TopHotels#chkin=12%2F01%2F2016&chkout=12%2F03%2F2016"} target="_blank">
          { this.props.hotelInfo.localizedName }
          </a>
        </p>
        <p>
          <img src={'https://images.trvl-media.com' + this.props.hotelInfo.largeThumbnailUrl }/>
        </p>
        <p>
          ${ this.props.hotelInfo.lowRate } per night
        </p>
      </div>
    )
  }
})

export default Hotel;