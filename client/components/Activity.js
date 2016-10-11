// DASHBOARD > PANEL > ACTIVITY TILE > ACTIVITY ===========================
import React from 'react';
// import { postActivityItin } from '../actions/actionCreators';


const Activity = React.createClass({
  getInitialState() {
    return {
      status_id: '',
      type_id: '',
      user_email: '',
      name: ''
    };
  },

  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  handleSaveActivity: function(event) {
    event.preventDefault();
    console.log('SELECTED ACTIVITY: ', this.props);
    var userEmail = this.props.userEmail
    var postActivityItin = this.props.postActivityItin
    let dataObj = {
      status_id: 2,
      type_id: 4,
      user_email: `${this.props.userEmail.split("=")[1].split("#")[0]}`,
      name: `${this.props.activityInfo.title}`
    };

    $.ajax({
      url: '/activityReservation',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json',
      success: function (data) {
        postActivityItin(userEmail, '/dashboard')
      },
      error: function (data) {
        console.error('ERROR SENDING TO DATABASE: ', data);
      }
    })
  },

  render() {
    if(this.props.activityInfo !== undefined) {
      return (
        <li className="item-hotel">
          <div className="crop">
            <img src={ this.props.activityInfo.imageUrl } /><br/>
          </div>
          <div className="details clearfix">
            <a 
              href={
                'https://www.expedia.com/things-to-do/title.a'+ 
                this.props.activityInfo.id + 
                '.activity-details?srp=true&location=' +
                this.props.location + 
                '&startDate=' + 
                this.changeDate(this.props.startDate) + 
                '&endDate=' + 
                this.changeDate(this.props.endDate)
              } 
              target="_blank">
              {this.props.activityInfo.title}
            </a>
            <br/>

            <span>{ this.props.activityInfo.supplierName }</span><br />
            
            <strong>{ this.props.activityInfo.fromPrice }</strong><br/>
            
            <button 
              type="button" 
              className="btn" 
              onClick={ this.handleSaveActivity }>Save Activity
            </button>
          </div>
        </li>
      );
    }
  } 
});

export default Activity;
