// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import { Link } from 'react-router';
import Hotels from './Hotels'
// 
const Dashboard = React.createClass({
  
  render() {
    var hotelsList = this.props.expediaInfo[0].hotelList;
    return (
      <div>
        <NavigationBar/>
        <article>
<<<<<<< 83af176425404f331ff532614ce189b34cef079b
          <div className="dashboard-container clearfix">
            {
              this.props.expediaInfo[0].hotelList.map((hotel) =>
                <Hotels
                  key={hotel.hotelId}
                  hotelInfo={hotel}
                />
              )
            }
=======


          <div className="dashboard-container">
            DASHBOARD
            {this.props.expediaInfo[0].hotelList.map((hotel) => <Hotels key={hotel.hotelId} hotelInfo={hotel}/>
              )}
>>>>>>> DB Config added to gitignore
          </div>
        </article>
      </div> 
    );
  }
}) 

export default Dashboard;