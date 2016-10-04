import React, { Component } from 'react';
import { Link } from 'react-router';
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
  },

  render() {
    let formVal;
    if (this.state.linkVal === 'Budget') {
      formVal = <BudgetForm />;
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
          <li><a className="link-budget" onClick={this.form}>Budget</a></li>
        </ul>
        <div id="light" className="white_content">
          {formVal}
        </div>
        <div id="fade" className="black_overlay"></div>
      </div>
    );
  } 
})

export default Itinerary;