// DASHBOARD COMPONENT ========================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './NavigationBar';
import Itinerary from './Itinerary';
import Panel from './Panel';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      //set an inital state to listen for saves in each hotel/car/flight/activity and send it down to the itin props
      itinItems: [
        {
          selectedBookedHotels: {},
          selectedBookedFlights: {},
          selectedBookedCars: {},
          selectedBookedActivities: {}
        },
        {
          selectedSavedHotels: {},
          selectedSavedFlights: {},
          selectedSavedCars: {},
          selectedSavedActivites: {}
        }
      ]
    }
  },


  render() {
    // if(this.state.savedItemBoolean.savedActivity === true){
    //   this.props.savedItemBoolean.savedActivity = false;
    // }
    return (
      <div className='outer-dashboard-container'>
        <NavigationBar data={this.props}/>
        <article>
          <Itinerary {...this.props} data={this.props} dashboardState={this.state}/>
          <Panel {...this.props} dashboardState={this.state} data={this.props}/>
        </article>
      </div> 
    );
  }
}); 

export default Dashboard;
