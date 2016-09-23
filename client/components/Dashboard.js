// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
// import HotelTile from './HotelTile';
// import FlightTile from './FlightTile';
import Panel from './Panel';
import NavigationBar from './NavigationBar';

const Dashboard = React.createClass({
  render() {
    console.log('>>>>> DASHBOARD <<<<<');
    console.log('Hotel: ', this.props.expediaHotelInfo);
    // console.log('Flights: ', this.props.expediaFlightInfo);

    var startDate = this.props.expediaHotelInfo.startDate
    var endDate = this.props.expediaHotelInfo.endDate
  
    return (
      <div className='outer-dashboard-container'>
        <NavigationBar/>
        <article>
          <Panel data={this.props}/>
        </article>
      </div> 
    );
  }
}); 

export default Dashboard;