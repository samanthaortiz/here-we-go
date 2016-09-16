import React, { Component } from 'react';

let divStyle = {
  backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1431818563807-927945852ab6?dpr=2&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb' + ')',
  height: '100%',
  width: '100%'
  // WebkitTransition: 'all', // note the capital 'W' here
  // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
}

const Splash = React.createClass({

  getInitialState() {
    return {value: 'City and State'};
  },
  handleChange(event) {
    this.setState({value: event.target.value});
  },
  render() {
    return (
      <div style={divStyle}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Let's Go!</button> 
      </div>
    );
  }
});

export default Splash