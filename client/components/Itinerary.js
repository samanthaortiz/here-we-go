import React, { Component } from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
// TRIP BUDGET FORM PAGE
import BudgetForm from './BudgetForm';

const Itinerary = React.createClass({

  getInitialState() {
    return {
      linkVal: ''
    };
  },

  form: function(event) {
    event.preventDefault();
    this.setState({
      linkVal: 'Budget'
    });
=======
import BudgetForm from './BudgetForm';

const Itinerary = React.createClass({
  handleBudgetForm: function(event) {
    console.log('OPEN LIGHTBOX')
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
>>>>>>> dev
  },

  render() {
    let formVal;
    if (this.state.linkVal === 'Budget') {
      formVal = <BudgetForm data={this.props.data} />;
      document.getElementById('light').style.display='block';
      document.getElementById('fade').style.display='block';
    }
    return (
      <div className="tile-itinerary">
        <h3>My Itinerary</h3>
        <ul>
          <li>Saved</li>
          <li>Upcoming</li>
          <li>Previous</li>
          <li>Cancelled</li>
<<<<<<< HEAD
          <li><a onClick={this.form}>New Itinerary</a></li>
          <li><a className="link-budget" onClick={this.form}>Budget</a></li>
        </ul>
        <div id="light" className="white_content">
          {formVal}
=======
          <li><a onClick={this.handleBudgetForm}>Budget</a></li>
        </ul>
        <div id="light" className="lightbox-content">
          <BudgetForm />
>>>>>>> dev
        </div>
        <div id="fade" className="black_overlay"></div>
      </div>
    );
  } 
})

export default Itinerary;