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
    this.props.submitBudgetFormData('TOTAL BUDGET', 'HOTEL BUDGET', 'FLIGHT BUDGET', 'CAR RENTAL BUDGET', 'ACTIVITY BUDGET');
  },

  render() {
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