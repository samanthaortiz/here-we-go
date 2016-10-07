// BUDGET FORM COMPONENT ===================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';

const NewTripForm = React.createClass({
  getInitialState() {
    return {
      tripName: ''
    };
  },

  closeForm: function(event) {
    event.preventDefault();
    // CLOSE BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
  },

  handleInputValueChange: function(event) {
    this.setState({
      tripName: event.target.value
    });
    console.log('this is the trip name: ', this.state.tripName)
  },

  submitNewTripFormData: function(event) {
    event.preventDefault();

    // CLOSE BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';

    var formData = {
      tripName: this.state.tripName,
      userEmail: this.props.data.reducerTripData.email.split("=")[1].split("#")[0]
    };

    $.ajax({
      url: '/api/newTrip',
      type: 'POST',
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function (data) {
        console.log("New Trip Submitted!!!")
      },
      error: function (data) {
        console.error('ERROR SENDING TRIP TO DATABASE: ', data);
      }
    });
  },

  render() {
    return (
      <div className="container-form-budget">
        
        <form className="form-budget" onSubmit={this.submitNewTripFormData}>
          <div>
            <ul>
              <li className="field-full">
                <label htmlFor="LABEL">Trip Name</label>
                <input
                  type="text"
                  name="tripName"
                  placeholder="Name of Trip"
                  value={this.state.tripName}
                  onChange={this.handleInputValueChange}
                />
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="field-full">
                <button className="submit" type="submit">Submit Form</button>
              </li>
              <li className="field-full">
                <a onClick={this.closeForm}>close</a>
              </li>
            </ul>
          </div>
        </form>
      </div> 
    );
  }
}) 

export default NewTripForm;
