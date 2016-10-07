import React, { Component } from 'react';
import { Link } from 'react-router';
import BudgetForm from './BudgetForm';
import HotelItin from './HotelItin';
import FlightItin from './FlightItin';
import CarItin from './CarItin';
import ActivityItin from './ActivityItin';

const Itinerary = React.createClass({

  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
  },

  render() {
    console.log("ACTIVITY PROPS ITIN", this.props.data)
    // console.log('hotel itin data', this.props.data.reducerHotelItin.hotelItinData)
    // if(this.props.data.reducerTripData.loggedIn){

      var bookedHotelList = [];
      var bookedCarList = [];
      var bookedFlightList = [];

      var savedHotelList = [];
      var savedCarList = [];
      var savedFlightList = [];
      var savedActivityList = [];

      this.props.data.reducerHotelItin.hotelItinData.forEach(function(hotelItin){
        if (hotelItin.status_id === 1){
          bookedHotelList.push(hotelItin);
        } else if (hotelItin.status_id === 2){
          savedHotelList.push(hotelItin);
        }
      });

      this.props.data.reducerFlightItin.flightItinData.forEach(function(flightItin){
        if (flightItin.status_id === 1){
          bookedFlightList.push(flightItin);
        } else if(flightItin.status_id === 2){
          savedFlightList.push(flightItin);
        }
      });

      this.props.data.reducerCarItin.carItinData.forEach(function(carItin){
        if (carItin.status_id === 1){
          bookedCarList.push(carItin);
        } else if(carItin.status_id === 2){
          savedCarList.push(carItin);
        }
      });

      this.props.data.reducerActivityItin.activityItinData.forEach(function(activityItin){
       if(activityItin.status_id === 2){
          savedActivityList.push(activityItin);
        }
      });


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
          {bookedHotelList.map((hotelItin, i) => 
            <HotelItin
              key={i}
              dashboardState={this.props.dashboardState}
              hotelItinInfo={hotelItin}
              startDate={this.props.data.reducerTripData.startDate}
              endDate={this.props.data.reducerTripData.endDate}
            />
            )}
          <h4>Flights</h4>
            {bookedFlightList.map((flightItin, i) =>
              <FlightItin
                key={i}
                dashboardState={this.props.dashboardState}
                flightItinInfo={flightItin}
            />
            )}
          <h4>Car Rentals</h4>
            {bookedCarList.map((carItin, i) => 
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
               {savedHotelList.map((hotelItin, i) => 
                <HotelItin
                  key={i}
                  dashboardState={this.props.dashboardState}
                  hotelItinInfo={hotelItin}
                  startDate={this.props.data.reducerTripData.startDate}
                  endDate={this.props.data.reducerTripData.endDate}
                />
                )}
              <h4>Flights</h4>
                {savedFlightList.map((flightItin, i) =>
                  <FlightItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    flightItinInfo={flightItin}
                />
                )}
              <h4>Car Rentals</h4>
                {savedCarList.map((carItin, i) => 
                  <CarItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    carItinInfo={carItin}
                  />
                )}
                   <h4>Activities</h4>
                {savedActivityList.map((activityItin, i) => 
                  <ActivityItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    activityItinInfo={activityItin}
                  />
                )}
             
            </div>     
                    {/*

            <div id="budget" className="tab-pane fade">
             <h3>Budget</h3>
                <div id="light" className="lightbox-content">
                  <BudgetForm />
                </div>
                <div id="fade" className="black_overlay"></div>
                <p><a onClick={this.handleBudgetForm}>Add New Budget!</a></p>
            </div>
            <p>Upcoming</p>
            <p>Previous</p>
            <p>Cancelled</p>*/}
        </div>
        </div>
      );
    }
})
export default Itinerary;