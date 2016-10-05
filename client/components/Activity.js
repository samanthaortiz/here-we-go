// DASHBOARD > PANEL > ACTIVITY TILE > ACTIVITY ===========================
import React from 'react';
import Hotel from './Hotel';

const Activity = React.createClass({
  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  handleSaveActivity: function(event) {
    event.preventDefault();
    console.log('SELECTED ACTIVITY: ', this.props);
  },

  render() {
    if(this.props.activityInfo !== undefined) {
      return (
        <div>
          <button type="button" className="btn" onClick={this.handleSaveActivity}>Save Activity</button>
          <div>
            <a href={'https://www.expedia.com/things-to-do/title.a'+ this.props.activityInfo.id + '.activity-details?srp=true&location=' +this.props.location + '&startDate=' + this.changeDate(this.props.startDate) + '&endDate=' + this.changeDate(this.props.endDate)} target="_blank">
            {this.props.activityInfo.title}</a><br/>
            <img src={this.props.activityInfo.imageUrl} /><br/>
          </div>
          <div>
            {this.props.activityInfo.fromPrice}<br/><br/>
          </div>
        </div>
      );
    }
  } 
});

export default Activity;
