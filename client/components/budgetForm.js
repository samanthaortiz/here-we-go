// BUDGET FORM COMPONENT ===================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';

const BudgetForm = React.createClass({
  getInitialState() {
    return {
      totalBudget: '',
      hotelBudget: '',
      flightBudget: '',
      carRentalBudget: '',
      activityBudget: ''
    };
  },

  closeForm: function(event) {
    event.preventDefault();
    // CLOSE BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
  },

  handleInputValueChange: function(event) {
    var key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
  },

  submitBudgetFormData: function(event) {
    event.preventDefault();

    // CLOSE BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';

    var formData = {
      // totalBudget: this.state.totalBudget,
      hotel: this.state.hotelBudget,
      flight: this.state.flightBudget,
      car: this.state.carRentalBudget,
      activity: this.state.activityBudget,
      userEmail: this.props.data.reducerTripData.email.split("=")[1].split("#")[0]
    };

    $.ajax({
      url: '/api/budgetData',
      type: 'POST',
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function (data) {
        console.log("HOLY CRAP WE DID IT!")
        // // Trigger a fetch to update the messages, pass true to animate
        // app.fetch();
      },
      error: function (data) {
        console.error('ERROR SENDING TO DATABASE: ', data);
      }
    });
  },

  render() {
    return (
      <div className="container-form-budget">
        
        <form className="form-budget" onSubmit={this.submitBudgetFormData}>
          <div>
            <ul>
              <li className="field-full">
                <label htmlFor="LABEL">Total Budget</label>
                <input
                  type="text"
                  name="totalBudget"
                  placeholder="PLACEHOLDER"
                  value={this.state.totalBudget}
                  onChange={this.handleInputValueChange}
                />
              </li>
            </ul>
          </div>

          <div className="form-body">
            <ul>
              <li>
                <label htmlFor="Hotel">Hotel</label>
                <input
                  type="text"
                  name="hotelBudget"
                  placeholder="PLACEHOLDER"
                  value={this.state.hotelBudget}
                  onChange={this.handleInputValueChange}
                />
              </li>
              <li>
                <label htmlFor="Flight">Flight</label>
                <input
                  type="text"
                  name="flightBudget"
                  placeholder="PLACEHOLDER"
                  value={this.state.flightBudget}
                  onChange={this.handleInputValueChange}
                />
              </li>
              <li>
                <label htmlFor="CarRental">Car Rental</label>
                <input
                  type="text"
                  name="carRentalBudget"
                  placeholder="PLACEHOLDER"
                  value={this.state.carRentalBudget}
                  onChange={this.handleInputValueChange}
                />
              </li>
              <li>
                <label htmlFor="Activities">Activites</label>
                <input
                  type="text"
                  name="activityBudget"
                  placeholder="PLACEHOLDER"
                  value={this.state.activityBudget}
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

export default BudgetForm;
