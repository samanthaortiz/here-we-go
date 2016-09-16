// NAVIGATION BAR COMPONENT ===================================================
import React, { Component } from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <nav>
        <h1>
          <a href="/">Here We Go!</a>
        </h1>

        <div>
          <a href="/account">My Account</a>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;