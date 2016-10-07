import React from 'react';

const ActivityItin = React.createClass({

  onChange(){
    if (this.props.activityItinInfo.status_id === 1){
      if (this.props.dashboardState.itinItems[0].selectedBookedActivities[this.props.activityItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[0].selectedBookedActivities[this.props.activityItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[0].selectedBookedActivities[this.props.activityItinInfo.id] = !this.props.dashboardState.itinItems[0].selectedBookedActivities[this.props.activityItinInfo.id]
      } 
      console.log('this is the dash state for booked activities itin: ', this.props.dashboardState.itinItems[0].selectedBookedActivities)   
    } else if (this.props.activityItinInfo.status_id === 2){
      if (this.props.dashboardState.itinItems[1].selectedSavedActivites[this.props.activityItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[1].selectedSavedActivites[this.props.activityItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[1].selectedSavedActivites[this.props.activityItinInfo.id] = !this.props.dashboardState.itinItems[1].selectedSavedActivites[this.props.activityItinInfo.id]
      } 
      console.log('this is the dash state for saved activities itin: ', this.props.dashboardState.itinItems[1].selectedSavedActivites)   

    }
  },

  render() {
    return (
    <div className='item-activity-itin'>
          {/*<h4>ACTIVITY ITIN</h4>*/}
          <form>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" 
                onChange={this.onChange}/>
                {this.props.activityItinInfo.name}
              </label>
            </div>
          </form>
        </div>      
      );
    } 
});

export default ActivityItin;