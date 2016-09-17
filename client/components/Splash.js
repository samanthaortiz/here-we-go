import React, { Component } from 'react';
import { createStore } from 'redux';
import DatePicker from 'react-datepicker';
import moment from'moment';

// require('react-datepicker/dist/react-datepicker.css');

function travel(state = [], action) {
  switch (action.type) {
    case 'ADD_LOC':
      return state.concat([ action.text ])
    default:
      return state
  }
}

let store = createStore(travel, [ 'Use Redux' ])
// , window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())

store.dispatch({
  type: 'ADD_LOC',
  text: 'Read the docs'
})

const Splash = React.createClass({

  getInitialState() {
    return {
            value: '', 
            startDate: moment(),
            endDate: moment()
          };

  },
  handleChangeValue(event) {
    this.setState({
      value: event.target.value
    });
  },
  handleChangeStart(event) {
    this.setState({
      startDate: event
    });
  },
  handleChangeEnd(event) {
    this.setState({
      endDate: event
    });
  },
  componentDidMount() {
    document.body.classList.toggle('splashClass', this.props.isSplash)
  },
  render() {
    return (
      <div>
        <h1 id='logo'>Here We Go!</h1> 
        <div className="splashForm">
          <div><input
            type="text"
            placeholder='City and State'
            value={this.state.value}
            onChange={this.handleChangeValue}
          />
          </div>
          <div>
          <DatePicker
              selected={this.state.startDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart} />
          <DatePicker
              selected={this.state.endDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd} />
            </div>
          <button type="submit">Let's Go!</button> 
        </div>
      </div>
    );
  }
});

export default Splash;
