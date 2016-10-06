// DASHBOARD > PANEL > CAR RENTAL TILE > CAR RENTAL ===========================
import React from 'react';
// import { ButtonToolbar } from 'react-bootstrap';

const CarRental = React.createClass({
  getInitialState() {
    return {
      status_id: '',
      type_id: '',
      user_email: '',
      vehicleType: '',
      vehicleBrand: '',
      rentalCompany: '',
      pickUpAddress: '',
      dropOffAddress: '',
      pickUpTime: '',
      dropOffTime: ''
    };
  },

  // SAVE CAR RENTAL - STORE SELECTED CAR RENTAL TO DATABASE ==================
  handleSaveCarRental: function(event) {
    event.preventDefault();
    // console.log('SELECTED CAR: ', this.props);

    let dataObj = {
      status_id: 2,
      type_id: 3,
      user_email: `${this.props.userEmail.split("=")[1].split("#")[0]}`,
      vehicleType: `${this.props.carInfo.CarClass}`,
      vehicleBrand: `${this.props.carInfo.CarMakeModel}`,
      rentalCompany: `${this.props.carInfo.SupplierName}`,
      pickUpAddress: `${this.props.carInfo.PickupInfo.Location.Code}`,
      dropOffAddress: `${this.props.carInfo.DropOffInfo.Location.Code}`,
      pickUpTime: `${this.props.carInfo.PickupInfo.DateTime}`,
      dropOffTime: `${this.props.carInfo.DropOffInfo.DateTime}`
    };

    $.ajax({
      url: '/carReservation',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json',
      success: function (data) {
        // // Trigger a fetch to update the messages, pass true to animate
        // app.fetch();
      },
      error: function (data) {
        console.error('ERROR SENDING TO DATABASE: ', data);
      }
    });
  },

  render() {
    // console.log('>>>>> CAR RENTAL <<<<<');
    // console.log('PROPS: ', this.props.userEmail);
    // console.log(this.props.isLoggedIn);

    return (
      <div className="item-car-rental clearfix">
        <button type="button" className="btn" onClick={this.handleSaveCarRental}>Save Car</button>
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
  } 
});

export default CarRental;