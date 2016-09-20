// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import { Link } from 'react-router';
import Hotels from './Hotels'
// 
const Dashboard = React.createClass({
  render() {
    return (
      <div>
        <NavigationBar/>
        <article>


          <div className="dashboard-container">
            DASHBOARD
            {this.props.expediaInfo[0].hotelList.map((hotel) => <Hotels key={hotel.hotelId} hotelInfo={hotel}/>
              )}
          </div>
        </article>
      </div> 
    );
  }
}) 

export default Dashboard;