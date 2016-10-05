// NAVIGATION BAR COMPONENT ===================================================
import React, { Component } from 'react';

const NavigationBar = React.createClass({

  getEmail(){
    let initialEmail = this.props.data.reducerTripData.email
    let secondEmail = initialEmail.split("=")[1];
    let email = secondEmail.split("#")[0]
    return email;
  },

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
            <li>{this.getEmail()}</li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default NavigationBar;