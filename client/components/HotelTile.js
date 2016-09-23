import React from 'react';
import Hotel from './Hotel';

const Hotels = React.createClass({
  render() {
    console.log('>>>> HOTELS this.props: ', this.props);
    return (
<<<<<<< HEAD:client/components/Hotels.js
      <div className="dashboard-container clearfix">
        {
          // this.props.expediaInfo.expediaInfo.hotelList.map((hotel) =>
          this.hotelList.map((hotel) =>
            <Hotel
              key={hotel.hotelId}
              hotelInfo={hotel}
              startDate={startDate}
              endDate={endDate}
            />
          )
        }
=======
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
<<<<<<< HEAD:client/components/HotelTile.js
          From ${ this.props.hotelInfo.lowRateInfo.priceToShowUsers } per night
=======
          ${ this.props.hotelInfo.lowRateInfo.priceToShowUsers } per night
>>>>>>> 071d055fd3dcfbbf596c1f5a7bacab224054542a:client/components/Hotels.js
        </p>
        <p>
          { this.props.hotelInfo.shortDescription }
        </p>
>>>>>>> dev:client/components/HotelTile.js
      </div>
    );
  }
});

export default Hotels;
