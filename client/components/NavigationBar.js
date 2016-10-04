// NAVIGATION BAR COMPONENT ===================================================
import React, { Component } from 'react';
class NavigationBar extends Component {
  render() {
    return (
      <nav className="clearfix">
        <div className="logo">
          <h1>
            <a href="/">
              Here We Go!
              </a>
            </h1>
        </div>
        <div className="acct-menu">
          <ul>
            <li>{this.props.data.reducerTripData.email}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;