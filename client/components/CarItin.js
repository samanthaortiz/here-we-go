import React from 'react';

const CarItin = React.createClass({

  render() {
    console.log('rendering car itin', this.props)
      return (
        <div className='item-car-itin'>
          <h4>CAR ITIN</h4>
          <p>{this.props.carItinInfo.rentalCompany}</p>
          <p>{this.props.carItinInfo.vehicleBrand}</p>
        </div>
      );
    } 
});

export default CarItin;