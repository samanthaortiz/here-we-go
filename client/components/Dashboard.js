// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import { Link } from 'react-router';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
// 
const Dashboard = React.createClass({

  render() {
  console.log('EXPEDIA FLIGHT INFO GOING TO DASHBOARD:', this.props.expediaFlightInfo)
  // console.log(this.props.expediaHotelInfo.startDate, this.props.expediaHotelInfo.endDate);
  var startDate = this.props.expediaHotelInfo.startDate
  var endDate = this.props.expediaHotelInfo.endDate

    return (
      <div className='outer-dashboard-container'>
        <NavigationBar/>
        <article>
          <div className="dashboard-container clearfix">
            {
              this.props.expediaHotelInfo.expediaHotelInfo.hotelList.map((hotel) =>
                <HotelTile
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