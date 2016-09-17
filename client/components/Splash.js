import React, { Component } from 'react';
import { createStore } from 'redux'

function travel(state = [], action) {
  switch (action.type) {
    case 'ADD_LOC':
      return state.concat([ action.text ])
    default:
      return state
  }
}

let store = createStore(travel, [ 'Use Redux' ], window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())

store.dispatch({
  type: 'ADD_LOC',
  text: 'Read the docs'
})

const Splash = React.createClass({

  getInitialState() {
    return {value: 'City and State'};
  },
  handleChange(event) {
    this.setState({value: event.target.value});
  },
  componentDidMount() {
    document.body.classList.toggle('splashClass', this.props.isSplash)
  },
  render() {
    return (
      <div>
        <h1 id='logo'>Here We Go!</h1> 
        <div className="splashForm">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Let's Go!</button> 
        </div>
      </div>
    );
  }
});

export default Splash;
