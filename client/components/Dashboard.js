// DASHBOARD COMPONENT ========================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './NavigationBar';
import Itinerary from './Itinerary';
import Panel from './Panel';

const Dashboard = React.createClass({
  // getInitialState() {

  // },

  render() {
    // console.log('>>>>> DASHBOARD <<<<<');
    console.log('=====> ', this.props);
    // var startDate = this.props.expediaHotelInfo.startDate
    // var endDate = this.props.expediaHotelInfo.endDate
  
    return (
      <div className='outer-dashboard-container'>
        <NavigationBar data={this.props}/>
        <article>
          <Itinerary data={this.props}/>
          <Panel data={this.props}/>
        </article>
      </div> 
    );
  }
}); 

export default Dashboard;
