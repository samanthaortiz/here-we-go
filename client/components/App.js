import React, { Component } from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div className="container">
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  } 
})

export default App;