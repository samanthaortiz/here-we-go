// DASHBOARD > PANEL > ACTIVITY TILE =============================================
import React from 'react';
import Activity from './Activity';

const ActivityTile = React.createClass({

  filterActivities(){
  var activities = []
    for(var i = 0; i < 25; i++){
      activities.push(this.props.activityData.tripData[2].activityData.activities[i])
    }
    return activities;
  },

  render() {
    // console.log('>>>>> Activity TILE <<<<<');
    let activities = this.filterActivities();
    console.log("ACTIVITIES", activities)
    if(this.props.activityData.length !== 0) {
      
      return (
        <div className="tile-activity">
          <h3>THINGS TO DO</h3>
          <ul className="row">
              {activities.map((activity) =>
                <Activity
                  isLoggedIn={this.props.activityData.loggedIn}
                  userEmail={this.props.activityData.email}
                  startDate={this.props.activityData.startDate}
                  endDate={this.props.activityData.endDate}
                  location={this.props.activityData.location}
                  key={activity.id}
                  activityInfo={activity}
                />
              )
            }
          </ul>
        </div>
      );

    } else {

      return (
        <div className="tile-activity">
          <Activity />
        </div>
      );

    }
  }
});

export default ActivityTile;
