import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';
import DatePicker from 'react-bootstrap-date-picker';
// import { expediaInfo } from '../actions/actionCreators';

const Splash = React.createClass({
  getInitialState() {
    let loc = window.location.href;
    let date = new Date().toISOString().substring(0, 10);
    return {
      city: '',
      startDate: date,
      endDate: date,
      isUserLoggedIn: loc.indexOf("?") !== -1,
      email: loc
    };
  },

  handleChangeValue(event) {
    this.setState({
      city: event.target.value
    });
  },

  handleChangeStart(startDate) { 
    this.setState({
      startDate: startDate.substring(0, 10),
      startValue: startDate
    })
  },

  handleChangeEnd(endDate) {
    this.setState({
      endDate: endDate.substring(0, 10),
      endValue: endDate
    })
  },
  login(e){
    this.props.login();
  },

  componentWillMount() {
    document.body.classList.toggle('splashClass')
    if (this.state.isUserLoggedIn) {
      this.setState({
        email: this.state.email
      })
      this.props.postHotelItin(this.state.email, "/")
      this.props.postFlightItin(this.state.email, "/")
      this.props.postCarItin(this.state.email, "/")
      this.props.postActivityItin(this.state.email, "/")
      this.props.getAllTrips(this.state.email, "/");
    }
  },

  componentWillUnmount(){
    document.body.classList.toggle('splashClass')
  },

  onSubmit(e) {
    e.preventDefault();
    document.getElementById('loading-icon').style.display = 'block';
    // CALL ACTION CREATOR
    this.props.postTripData(this.state.city, this.state.startDate, this.state.endDate, this.state.email, this.state.isUserLoggedIn);
  },

  render() {
    //     // console.log('this.state.email in render method', this.state.email)
    // if (this.state.isUserLoggedIn) {
    //   console.log('in if statement in render', ;
    //   // this.props.postHotelItin(this.state.email)
    // }
    var navLink = '';
    var welcomeMsg = '';
    if (!this.state.isUserLoggedIn) {
      // navLink = <a className="nav-login" href="/api/auth/google">Login</a>
      navLink = <a href="/api/auth/google"><button type="submit" className="navbutton" value="Login">Login</button></a>
    } else {
      let parseEmail = this.state.email.split("=")[1];
      let email = parseEmail.split("#")[0]
      welcomeMsg = `Welcome back, ${email}!`;
      // navLink = <a className="nav-logout" href="/api/logout">Logout</a>
      navLink = <a href="/api/logout"><button type="submit" className="navbutton" value="Logout">Logout</button></a>
    }

    return (
      <div>
        <div className="splash-nav">
          {welcomeMsg} {navLink}
        </div>

        <div className="splash-container">
          <h1 className="splash-logo">Here We Go!</h1>
          <form className="splash-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="City and State"
              value={this.state.value}
              onChange={this.handleChangeValue}
            />

            <DatePicker
              value={this.state.startValue}
              startDate={this.state.startDate}
              onChange={this.handleChangeStart}
            />

            <DatePicker
              value={this.state.endValue}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
            />

            <button type="submit" className="btn btn-secondary">Let's Go!</button>

            <div id='loading-icon'>Loading...</div>
          </form>
        </div>




        {/*
        <div>
        <h1 id='logo'>
          Here We Go!
        </h1>
        </div>
        <div>
          <form className="splashForm" onSubmit={this.onSubmit}>
            <div className="input-group">
              <input
              type="text"
              placeholder='City and State'
              value={this.state.value}
              onChange={this.handleChangeValue}
              />
              <DatePicker value={this.state.startValue} startDate={this.state.startDate} onChange={this.handleChangeStart}/>
              <DatePicker value={this.state.endValue} endDate={this.state.endDate} onChange={this.handleChangeEnd}/>          
              <button type="submit" className="btn btn-secondary">Let's Go!</button>
              <div id='loading-icon'>Loading...</div>
            </div>
          </form>
        </div>*/}
      </div>
    );
  }
});

export default Splash;
