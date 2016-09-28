// DASHBOARD > PANEL > CAR RENTAL TILE > CAR RENTAL ===========================
import React from 'react';
// import { ButtonToolbar } from 'react-bootstrap';

const CarRental = React.createClass({
  render() {
    console.log('CarRental.js: ', this.props.carInfo)
    return (
      <div className="item-car-rental">
        CAR RENTAL
      </div>
    );
  } 
});

export default CarRental;