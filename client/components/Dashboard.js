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
<<<<<<< de090097df34a3322123a218234f8e7b3514b587
<<<<<<< 51e04b6ca11e4be137ec2f436d359e52f30392bd
            {
              //{this.props.expediaInfo.map((info, i) => <Hotels {...this.props} key={i} info={info} />)}
              this.props.expediaInfo[0].hotelList.map((hotel) =>
                <Hotels
                  key={hotel.hotelId}
                  hotelInfo={hotel}
                />
              )
            }
=======
           {this.props.expediaInfo.map((info, i) => <Hotels {...this.props} key={i} info={info} />)}
=======
           {this.props.expediaInfo[0].hotelList.map((info, i) => <Hotels {...this.props} key={i} info={info} />)}
>>>>>>> Working on rendering all data

            DASHBOARD
>>>>>>> fix(): Expedia info rendering hotel name from hotel list
          </div>
        </article>
      </div> 
    );
  }
}) 

export default Dashboard;