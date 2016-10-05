import React from 'react';

const CarItin = React.createClass({

  render() {
    console.log('rendering car itin', this.props)
      return (
        <div>
          {this.props.carItinInfo.rentalCompany}
          {this.props.carItinInfo.vehicleBrand}
          {this.props.carItinInfo.pickupTime} to {this.props.carItinInfo.dropoffTime}
        </div>
      );
    } 
});

export default CarItin;