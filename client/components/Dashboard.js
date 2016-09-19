// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import { Link } from 'react-router';
import Hotels from './Hotels'
// 
const Dashboard = React.createClass({
  render() {
    return (
      <div>
        <NavigationBar/>
        <article>


          <div className="dashboard-container">
           {this.props.expediaInfo.map((info, i) => <Hotels {...this.props} key={i} info={info} />)}

            DASHBOARD
          </div>
        </article>
      </div> 
    );
  }
}) 

export default Dashboard;