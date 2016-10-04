import React, { Component } from 'react';
import { Link } from 'react-router';
import BudgetForm from './BudgetForm';

const Itinerary = React.createClass({
<<<<<<< HEAD
  componentWillMount(){
<<<<<<< 5dcf8c511bc8190b0fc8a297e0b6a4dff06c23e9

=======
  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
>>>>>>> localBranch
  },

=======
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
>>>>>>> feat(getting hotel itin data to front end):
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
          <li><a onClick={this.handleBudgetForm}>Budget</a></li>
        </ul>
        <div id="light" className="lightbox-content">
          <BudgetForm />
        </div>
        <div id="fade" className="black_overlay"></div>
      </div>
    );
  } 
})

export default Itinerary;
