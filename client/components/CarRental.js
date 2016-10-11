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
    var userEmail = this.props.userEmail
    var postCarItin = this.props.postCarItin
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
        postCarItin(userEmail, '/dashboard')

        // // Trigger a fetch to update the messages, pass true to animate
        // app.fetch();
      },
      error: function (data) {
        console.error('ERROR SENDING TO DATABASE: ', data);
      }
    });
  },

  render() {

    let thumbIMG = this.props.carInfo.ThumbnailUrl
    let largeIMG = thumbIMG.replace("t.jpg", "s.jpg");

    return (

      <li className="item-car-rental">
        <div className="crop">
          <img src={ largeIMG }/>
        </div>
        <div className="details clearfix">
          {this.props.carInfo.CarMakeModel}<br/>

          {this.props.carInfo.CarClass}<br/>

          <span>{ this.props.carInfo.SupplierName }</span><br />
          
          <strong>${ this.props.carInfo.Price.TotalRate.Value }</strong> Total<br/>
          
          <button 
            type="button" 
            className="btn" 
            onClick={this.handleSaveCarRental}>Save Car
          </button>
        </div>
      </li>
    );
  } 
});

export default CarRental;