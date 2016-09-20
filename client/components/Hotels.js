import React from 'react';

const Hotel = React.createClass({
  render(){
    var hotel = this.props;
    return (
      <div>
      <p>
        <a href={"https://www.expedia.com/New-York-Hotels.h"+this.props.hotelInfo.hotelId+".Hotel-Information?rfrr=TG.LP.TopHotels#chkin=09%2F30%2F2016&chkout=10%2F02%2F2016"} target="_blank">
        { this.props.hotelInfo.localizedName }
        </a>
      </p>
      <p>
        <img src={'https://images.trvl-media.com' + this.props.hotelInfo.largeThumbnailUrl }/>
      </p>
      <p>
        ${ this.props.hotelInfo.lowRate } per night
      </p>
      <p>
        { this.props.hotelInfo.shortDescription }
      </p>
      </div>

    )
  }
})

export default Hotel;