// NAVIGATION BAR COMPONENT ===================================================
import React, { Component } from 'react';
class NavigationBar extends Component {
  render() {
    console.log('>>>>>>>>>>> ', this.props)
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
            <li>username</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;