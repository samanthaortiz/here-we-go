// DASHBOARD > PANEL > CAR RENTAL TILE > CAR RENTAL ===========================
import React from 'react';
// import { ButtonToolbar } from 'react-bootstrap';

const CarRental = React.createClass({
  render() {
    console.log('>>>>> CAR RENTAL <<<<<');
    console.log('carData: ', this.props.carInfo);

    if(this.props.carInfo.CarClass !== 'Special Special') {
      return (
        <div className="item-car-rental clearfix">
          <div>
            <img src={this.props.carInfo.ThumbnailUrl} /><br/>
            {this.props.carInfo.SupplierName}
          </div>
          <div>
            {this.props.carInfo.CarMakeModel}<br/>
            {this.props.carInfo.CarClass}<br/>
            D: {this.props.carInfo.CarDoorCount.Max} P: {this.props.carInfo.Capacity.AdultCount}
          </div>
          <div>
            $$ per day<br/>
            ${this.props.carInfo.Price.TotalRate.Value}<br/>
            RESERVE
          </div>
        </div>
      );
    };
  } 
});

export default CarRental;