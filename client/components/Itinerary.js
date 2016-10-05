import React, { Component } from 'react';
import { Link } from 'react-router';
import BudgetForm from './BudgetForm';
<<<<<<< 7f1af54d8f2ff4cf3d5c1b6192c2718f05930f6d
import HotelItin from './HotelItin'
import CarRental from './CarRental';

const Itinerary = React.createClass({

=======
import HotelItin from './HotelItin';
import FlightItin from './FlightItin';
import CarItin from './CarItin';


const Itinerary = React.createClass({

  componentDidMount(){
    var email = this.props.data.reducerTripData.email;
    if(this.props.data.reducerTripData.loggedIn){
      this.props.data.postHotelItin(email)
      this.props.data.postCarItin(email)
      this.props.data.postFlightItin(email)
    }
  },

>>>>>>> feat(car, flight itin): added car and flight itinerary components
  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
  },

  render() {
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
    console.log("PROPS ITIN", this.props.data)
    console.log('hotel itin data', this.props.data.reducerHotelItin.hotelItinData)
    // if(this.props.data.reducerTripData.loggedIn){
=======
    // if(this.props.data.reducerTripData.loggedIn && this.props.data.reducerHotelItin.hotelItinData !== undefined){
>>>>>>> feat(itin): itin component - working on rendering db data
      return (
        <div className="tile-itinerary">
          <h3>My Itinerary</h3>
<<<<<<< 7f1af54d8f2ff4cf3d5c1b6192c2718f05930f6d
          {this.props.data.reducerHotelItin.hotelItinData.map((itin) => 
            <HotelItin
              key={itin.sift_id}
              hotelItinInfo={itin}
              startDate={this.props.data.reducerTripData.startDate}
              endDate={this.props.data.reducerTripData.endDate}
            />
            )}
              {/* map over cars
=======
          <ul>
            <li>Booked</li>
            {this.props.data.reducerHotelItin.hotelItinData.map(function(hotelItin){
              <HotelItin
                key={hotelItin.sift_id}
                hotelInfo={hotelItin}
                email={this.props.data.reducerHotelItin.email}
              />
              <div>hotelItin.providerName</div>
            })}

<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
            {this.props.data.reducerCarItin.carItinData.map(function(carItin){
>>>>>>> feat(car, flight itin): added car and flight itinerary components
=======
          {this.props.data.reducerCarItin.carItinData.map(function(carItin){
>>>>>>> feat(itin): itin component - working on rendering db data
              <CarItin
                key={carItin.sift_id}
                carInfo={carItin}
                email={this.props.reducerCarItin.email}
              />
            })}              
            
            {this.props.data.reducerFlightItin.flightItinData.map(function(flightItin){
              <FlightItin
                key={flightItin.sift_id}
                carInfo={flightItin}
                email={this.props.reducerFlightItin.email}
              />
            })} 

              {/* map over activities
              <ActivityItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
              />
              */}
            <p>Upcoming</p>
            <p>Previous</p>
            <p>Cancelled</p>
            <p><a onClick={this.handleBudgetForm}>Budget</a></p>
        
=======
              />*/}

            <li>Saved</li>
            <li>Previous</li>
            <li>Cancelled</li>
            <li><a onClick={this.handleBudgetForm}>Budget</a></li>
          </ul>
>>>>>>> feat(itin): itin component - working on rendering db data
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
          <div id="light" className="lightbox-content">
            <BudgetForm />
          </div>
          <div id="fade" className="black_overlay"></div>
      </div>
<<<<<<< b687877d83afd5fea2b1904f776b201c60ea060f
        )
    } 
=======
    )
    }
  } 
>>>>>>> feat(itin): itin component - working on rendering db data
})

export default Itinerary;
