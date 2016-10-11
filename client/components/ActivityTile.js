// DASHBOARD > PANEL > ACTIVITY TILE =============================================
import React from 'react';
import Activity from './Activity';

const ActivityTile = React.createClass({

  filterActivities(){
    let activityItems = this.props.activityData.tripData[2].activityData.activities;
    var activities = []
  if(activityItems.length > 25){ 
    for(var i = 0; i < 25; i++){
      activities.push(activityItems[i])
    }
    return activities;
  }
  return activityItems;
  },

  render() {

    let activities = this.filterActivities();

    if(this.props.activityData.length !== 0) {
      
      return (
        <div className="tile-activity">
          <h3>THINGS TO DO</h3>
          <ul className="row">
              {activities.map((activity) =>
                <Activity
                  {...this.props}
                  isLoggedIn={this.props.activityData.loggedIn}
                  userEmail={this.props.activityData.email}
                  startDate={this.props.activityData.startDate}
                  endDate={this.props.activityData.endDate}
                  location={this.props.activityData.location}
                  key={activity.id}
                  savedItemBoolean={this.props.savedItemBoolean}
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
