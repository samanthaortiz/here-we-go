// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import { Link } from 'react-router';
import Hotels from './Hotels'
// 
const Dashboard = React.createClass({

  render() {
  console.log(this.props.expediaInfo.startDate, this.props.expediaInfo.endDate);
  var startDate = this.props.expediaInfo.startDate
  var endDate = this.props.expediaInfo.endDate

    return (
      <div className='outer-dashboard-container'>
        <NavigationBar/>
        <article>
          <div className="dashboard-container clearfix">
            {
              this.props.expediaInfo.expediaInfo.hotelList.map((hotel) =>
                <Hotels
                  key={hotel.hotelId}
                  hotelInfo={hotel}
                  startDate={startDate}
                  endDate={endDate}
                />
              )
            }
          </div>
        </article>
      </div> 
    );
  }
}) 

export default Dashboard;