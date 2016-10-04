// BUDGET FORM COMPONENT ===================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';

const BudgetForm = React.createClass({

  // componentDidMount() {
  //   let thisForm = document.querySelector('.container-form-budget');
  //   if(thisForm.className.match('show_form')) {
  //     thisForm.className = 'container-form-budget';
  //   } else {
  //     thisForm.className = 'container-form-budget show_form';
  //   };
  // },

  // componentWillUnmount(){
  //   document.body.classList.toggle('splashClass')
  // },

  onClick: function(event) {
    event.preventDefault();
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
  },

  handleFormSubmission: function(event) {
    event.preventDefault();
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
    // this.props.data.submitBudgetFormData('TOTAL BUDGET', 'HOTEL BUDGET', 'FLIGHT BUDGET', 'CAR RENTAL BUDGET', 'ACTIVITY BUDGET');
    this.send('/api/formBudget', {
      totalBudget: 'Total Budget',
      hotel: 'Hotel Budget',
      flight: 'Flight Budget',
      car: 'Car Rental Budget',
      activity: 'Activity Budget'
    });

  },

  send: function(postURL, objData) {
    console.log('IN SEND AJAX')
    // POST the message to the server
    $.ajax({
      url: postURL,
      type: 'POST',
      data: JSON.stringify(objData),
      contentType: 'application/json',
      success: function (data) {
        // Trigger a fetch to update the messages, pass true to animate
        console.log('WE DID IT AMERICA!');
      },
      error: function (data) {
        console.error('FAILED TO SEND DATA ', data);
      }
    });
  },

  // getPage: function(page) {
  //   // Setup our ajax request
  //   let request = new XMLHttpRequest();
  //   let self = this;
  //   request.open('POST', 'formBudget', true);
  //   request.onload = function() {
  //     // If everything is cool...
  //     if (request.status >= 200 && request.status < 400) {
  //       // Load our next page
  //       self.loadPagedTweets(JSON.parse(request.responseText));
  //     } else {
  //       // Set application state (Not paging, paging complete)
  //       self.setState({paging: false, done: true});
  //     }
  //   };

  //   // Fire!
  //   request.send();
  // },

  render() {
    console.log('this.props: ', this.props.data)
    return (
      <div className="container-form-budget">
        
        <form className="form-budget" onSubmit={this.handleFormSubmission}>

          <div>
            <ul>
              <li className="field-full">
                <label htmlFor="LABEL">Total Budget</label>
                <input type="text" name="LABEL" placeholder="PLACEHOLDER" />
              </li>
            </ul>
          </div>

          <div className="form-body">
            <ul>
              <li>
                <label htmlFor="Hotel">Hotel</label>
                <input type="text" name="Hotel-Budget" placeholder="Hotel Budget" />
              </li>
              <li>
                <label htmlFor="Flight">Flight</label>
                <input type="text" name="Flight-Budget" placeholder="Flight Budget" />
              </li>
              <li>
                <label htmlFor="CarRental">Car Rental</label>
                <input type="text" name="Car-Rental-Budget" placeholder="Car Rental" />
              </li>
              <li>
                <label htmlFor="Activities">Activites</label>
                <input type="text" name="Activities-Budget" placeholder="Activities Budgets" />
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="field-full">
                <button className="submit" type="submit">Submit Form</button>
              </li>
              <li><a href="" onClick={this.onClick}>close form</a></li>
            </ul>
          </div>

          {/*
          <ul>
            <li>
              <label for="LABEL">LABEL</label>
              <input type="text" name="LABEL" placeholder="PLACEHOLDER" />
            </li>

            <li>
              <label for="LABEL">LABEL</label>
              <input type="text" name="LABEL" placeholder="PLACEHOLDER" />
            </li>

            <li>
              <label for="LABEL">LABEL</label>
              <input type="text" name="LABEL" placeholder="PLACEHOLDER" />
            </li>

            <li>
              <label for="LABEL">LABEL</label>
              <input type="text" name="LABEL" placeholder="PLACEHOLDER" />
            </li>

            <li>
              <label for="LABEL">LABEL</label>
              <input type="text" name="LABEL" placeholder="PLACEHOLDER" />
            </li>

            <li>
              <button class="submit" type="submit">Submit Form</button>
            </li>
          </ul>
        */}
        </form>
      </div> 
    );
  }
}) 

export default BudgetForm;