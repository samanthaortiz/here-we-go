import React, { Component } from 'react';
import { Link } from 'react-router';

const Itinerary = React.createClass({
  componentWillMount(){

  },

  render() {
    return (
      <div className="tile-itinerary">
        <h3>My Itinerary</h3>
        <ul>
          <li>Saved</li>

          <li>Upcoming</li>
          <li>Previous</li>
          <li>Cancelled</li>
          <li>Budget</li>
        </ul>
      </div>
    );
  } 
})

export default Itinerary;