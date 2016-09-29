import React from 'react';

const Activity = React.createClass({
render() {
  	console.log('>>>>ACTIVITY', this.props)
    return (
      <div>
        <h1>Activities View</h1>
      </div> 
    );
  }
});

export default Activity;