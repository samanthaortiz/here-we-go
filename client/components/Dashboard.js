// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
// NAVIGATION BAR
import NavigationBar from './NavigationBar.js';

class Dashboard extends Component {
  render() {
    return (
        <NavigationBar />,
        <h2>My Dashboard!</h2>
    );
  }
}

export default Dashboard;