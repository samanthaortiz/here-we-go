import React, { Component } from 'react';
import { Link } from 'react-router';
import BudgetForm from './BudgetForm';
import HotelItin from './HotelItin';
import FlightItin from './FlightItin';
import CarItin from './CarItin';

const Itinerary = React.createClass({

  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
  },

  render() {
    console.log("PROPS ITIN", this.props.data)
    // console.log('hotel itin data', this.props.data.reducerHotelItin.hotelItinData)
    // if(this.props.data.reducerTripData.loggedIn){
      return (
        <div className="tile-itinerary">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#booked">Booked</a></li>
          <li><a data-toggle="tab" href="#saved">Saved</a></li>
          <li><a data-toggle="tab" href="#budget">Budget</a></li>

        </ul>
        <div className="tab-content">
          <div id="booked" className="tab-pane fade in active">
          <h3>Booked</h3>

          <h4>Hotels</h4>
          {this.props.data.reducerHotelItin.hotelItinData.map((hotelItin, i) => 
            <HotelItin
              key={i}
              dashboardState={this.props.dashboardState}
              hotelItinInfo={hotelItin}
              startDate={this.props.data.reducerTripData.startDate}
              endDate={this.props.data.reducerTripData.endDate}
            />
            )}
          <h4>Flights</h4>
            {this.props.data.reducerFlightItin.flightItinData.map((flightItin, i) =>
              <FlightItin
                key={i}
                dashboardState={this.props.dashboardState}
                flightItinInfo={flightItin}
            />
            )}
          <h4>Car Rentals</h4>
            {this.props.data.reducerCarItin.carItinData.map((carItin, i) => 
              <CarItin
                key={i}
                dashboardState={this.props.dashboardState}
                carItinInfo={carItin}
              />
            )}
            </div>              
          <div id="saved" className="tab-pane fade">
             <h3>Saved</h3>
                <h4>Hotels</h4>
                //map hotels
                <h4>Flights</h4>
                //map flights
                <h4>Car Rentals</h4>
                //map cars
                <h4>Activities</h4>
                //map activites
            </div>

            <div id="budget" className="tab-pane fade">
             <h3>Budget</h3>
                <div id="light" className="lightbox-content">
                  <BudgetForm />
                </div>
                <div id="fade" className="black_overlay"></div>
                <p><a onClick={this.handleBudgetForm}>Add New Budget!</a></p>
            </div>
        </div>
              {/* map over activities
              <ActivityItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              
            <p>Upcoming</p>
            <p>Previous</p>
            <p>Cancelled</p>
            */}

          
        </div>
      );
    // } else {
    //   return (
    //    <div className="tile-itinerary">
    //     <h3>My Itinerary</h3>
    //     <ul>
    //         <li>Saved</li>
    //         <li>Upcoming</li>
    //         <li>Previous</li>
    //         <li>Cancelled</li>
    //         <li><a onClick={this.handleBudgetForm}>Budget</a></li>
    //       </ul>
    //       <div id="light" className="lightbox-content">
    //         <BudgetForm />
    //       </div>
    //       <div id="fade" className="black_overlay"></div>
    //   </div>
    //)
    //}
    }
})
export default Itinerary;