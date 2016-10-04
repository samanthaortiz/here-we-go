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
      email: loc.split("=")[1]
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
    console.log(e);
    this.props.login();
  },

  componentDidMount() {
    document.body.classList.toggle('splashClass')

    if (this.state.isUserLoggedIn) {
      this.setState({
        email: this.state.email.split("#")[0]
      })
      // this.props.getStuff(this.state.email.split("#")[0])
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
    // this.props.getCarRentals(this.state.city, this.state.startDate, this.state.endDate);
    // this.props.getFlightCode(this.state.city);
    // this.props.postHotelExpedia(this.state.city, this.state.startDate, this.state.endDate)
    // this.props.getActivities(this.state.city, this.state.startDate, this.state.endDate)
  },

  render() {
    
    return (
      <div>
      {!this.state.isUserLoggedIn && <a className="loginOut" href='/api/auth/google'>Login</a>}
      <br/>
      <a className="loginOut" href='/api/logout'>Logout</a>
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
        </div>
      </div>
    );
  }
});

export default Splash;
