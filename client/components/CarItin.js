import React from 'react';

const CarItin = React.createClass({

  render() {
      return (
        <div>
          {this.props.carInfo.rentalCompany}
          {this.props.carInfo.vehicleBrand}
          {this.props.carInfo.pickupTime} to {this.props.carInfo.dropoffTime}
        </div>
      );
    } 
});

export default CarItin;