import React from 'react';

const ActivityItin = React.createClass({
  onChange(){
    if (this.props.dashboardState.selectedSavedActivites[this.props.activityItinInfo.id] === undefined){
      this.props.dashboardState.selectedSavedActivites[this.props.activityItinInfo.id] = true;
    } else {
      this.props.dashboardState.selectedSavedActivites[this.props.activityItinInfo.id] = !this.props.dashboardState.selectedSavedActivites[this.props.activityItinInfo.id]
    } 
    // console.log('this is the dash state for booked activities itin: ', this.props.dashboardState.selectedSavedActivites)
  },

  render() {
    console.log("ACTIVITYITIN PROPS", this.props)
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