// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import { Link } from 'react-router'
// 
const Dashboard = React.createClass({
  render() {
    return (
      <div>
        <NavigationBar/>
        <article>
          <div className="dashboard-container">
            DASHBOARD
          </div>
        </article>
      </div>
    );
  }
}) 

export default Dashboard;