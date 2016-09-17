// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <h2>My Dashboard =======></h2>
      </div>
        
    );
  }
};

export default Dashboard;