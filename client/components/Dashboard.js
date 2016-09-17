// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'

class Dashboard extends Component {
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
};

export default Dashboard;