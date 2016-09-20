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
          <div className="dashboard-container">
              //{this.props.expediaInfo.map((info, i) => <Hotels {...this.props} key={i} info={info} />)}
              this.props.expediaInfo[0].hotelList.map((hotel) =>
                <Hotels
                  key={hotel.hotelId}
                  hotelInfo={hotel}
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