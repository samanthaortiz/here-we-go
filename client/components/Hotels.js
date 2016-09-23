import React from 'react';
import Hotel from './Hotel';

const Hotels = React.createClass({
  render() {
    console.log('>>>> HOTELS this.props: ', this.props);
    return (
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
      </div>
    );
  }
});

export default Hotels;
