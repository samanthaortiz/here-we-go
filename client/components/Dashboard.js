// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
import NavigationBar from './NavigationBar';
import Panel from './Panel';
=======
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';
// 
const Dashboard = React.createClass({
>>>>>>> dev

const Dashboard = React.createClass({
  render() {
<<<<<<< HEAD

    // console.log('>>>> DASHBOARD this.props: ', this.props);

    // console.log('Dashboard: ', this.props.expediaInfo.startDate, this.props.expediaInfo.endDate);
    var startDate = this.props.expediaInfo.startDate
    var endDate = this.props.expediaInfo.endDate
=======
  console.log('EXPEDIA FLIGHT INFO GOING TO DASHBOARD:', this.props.expediaFlightInfo)
  // console.log(this.props.expediaHotelInfo.startDate, this.props.expediaHotelInfo.endDate);
  var startDate = this.props.expediaHotelInfo.startDate
  var endDate = this.props.expediaHotelInfo.endDate
>>>>>>> dev

    return (
      <div className='outer-dashboard-container'>
        <NavigationBar/>
        <article>
<<<<<<< HEAD
          <Panel props={this.props.expediaInfo}/>
=======
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
>>>>>>> dev
        </article>
      </div> 
    );
  }
}); 

export default Dashboard;