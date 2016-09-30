// DASHBOARD > PANEL > ACTIVITY TILE =============================================
import React from 'react';
import Activity from './Activity';

const ActivityTile = React.createClass({
  render() {

    console.log('>>>>> Activity TILE <<<<<');
    console.log('Activity tile this.props: ',  this.props);

    {if(this.props.activityData.length !== 0) {
          return (
            <div className="tile-activity">
            <h3>THINGS TO DO</h3>
              {
                this.props.activityData.tripData[2].activityData.activities.map((activity) =>
                  <Activity
                    key={activity.id}
                    activityInfo={activity}
                    startDate={this.props.activityData.startDate}
                    endDate={this.props.activityData.endDate}
                    location={this.props.activityData.location}

                  />
                )
              }
            </div>
          );
        } else {
          return (
            <div className="tile-activity">
              <Activity />
            </div>
          );
        }}

  }
});

export default ActivityTile;