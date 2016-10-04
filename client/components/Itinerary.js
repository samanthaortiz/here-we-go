import React, { Component } from 'react';
import { Link } from 'react-router';

const Itinerary = React.createClass({
  componentWillMount(){
    // console.log(this.props);
    var email = this.props.data.reducerTripData.email;
    // var hotelData;
      if(this.props.data.reducerTripData.loggedIn){
        this.props.data.postHotelItin(email)
        .then(function(res){
          console.log('res', res)
        });
      }
 },
  render() {
      //          {hotelData}
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