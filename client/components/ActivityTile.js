<<<<<<< HEAD
// DASHBOARD > PANEL > CAR RENTAL TILE ========================================
=======
>>>>>>> feature
import React from 'react';
import Activity from './Activity';

const ActivityTile = React.createClass({
	componentWillMount(){
  	console.log('$$$$$$ACTIVITY TILE', this.props)
	},
render() {
    return (
      <div>
        <h1>Things To Do</h1>

      </div> 
    );
  }
});

export default ActivityTile;

