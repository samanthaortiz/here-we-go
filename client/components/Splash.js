import React, { Component } from 'react';
import { createStore } from 'redux';
import DatePicker from 'react-bootstrap-date-picker';

function travel(state = [], action) {
  switch (action.type) {
    case 'ADD_LOC':
      return state.concat([ action.text ])
    default:
      return state
  }
}

let store = createStore(travel, [ 'Use Redux' ]);
<<<<<<< HEAD
<<<<<<< afcce9298246566e15e4ef69f7fcc6f8ffa39316
  // window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
=======
  //window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())

>>>>>>> fix(): DevTools extension error fixed
=======
  //window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())

>>>>>>> feature

store.dispatch({
  type: 'ADD_LOC',
  text: 'Read the docs'
})

const Splash = React.createClass({

  getInitialState() {
    let date = new Date().toISOString().substring(0, 10);
    return {
            city: '',
            startDate: date,
            endDate: date
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
<<<<<<< HEAD
<<<<<<< afcce9298246566e15e4ef69f7fcc6f8ffa39316
          </div>
          <div className="input-group"> 
            <DatePicker value={this.state.startValue} startDate={this.state.startDate} onChange={this.handleChangeStart}/>
            <DatePicker value={this.state.endValue} endDate={this.state.endDate} onChange={this.handleChangeEnd}/>
          </div>
          <span className="input-group-btn">
          <button className="btn btn-secondary" type="button">Let's Go!</button>
          </span>
=======
>>>>>>> fix(): DevTools extension error fixed
=======
>>>>>>> feature
          <button type="submit">Let's Go!</button>
        </div>
      </div>
    );
  }
});

export default Splash;
