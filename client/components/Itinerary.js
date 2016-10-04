import React, { Component } from 'react';
import { Link } from 'react-router';
import BudgetForm from './BudgetForm';
import HotelItin from './HotelItin'

const Itinerary = React.createClass({

  componentDidMount(){
    var email = this.props.data.reducerTripData.email;
    if(this.props.data.reducerTripData.loggedIn){
      this.props.data.postHotelItin(email)
      // this.props.data.postCarItin(email)
      // this.props.data.postAirItin(email)
    }
  },

  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
  },

  render() {
    if(this.props.data.reducerTripData.loggedIn && this.props.data.reducerHotelItin.hotelItinData !== undefined){
      return (
        <div className="tile-itinerary">
          <h3>My Itinerary</h3>
          <ul>
            <li>Saved</li>
            {this.props.data.reducerHotelItin.hotelItinData.map(function(hotelItin){
              <HotelItin
                key={hotelItin.sift_id}
                hotelInfo={hotelItin}
                email={this.props.data.reducerHotelItin.email}
              />
            })}

              {/* map over cars
              <CarItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              */}

              {/* map over flights
              <FlightItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              */}

              {/* map over activities
              <ActivityItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              */}
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
    } else {
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
      </div>
        )
    }
  } 
})

export default Itinerary;
