// DASHBOARD COMPONENT ===================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './NavigationBar';
import Panel from './Panel';

const Dashboard = React.createClass({
  render() {

    // console.log('>>>> DASHBOARD this.props: ', this.props);

    // console.log('Dashboard: ', this.props.expediaInfo.startDate, this.props.expediaInfo.endDate);
    var startDate = this.props.expediaInfo.startDate
    var endDate = this.props.expediaInfo.endDate

    return (
      <div className='outer-dashboard-container'>
        <NavigationBar/>
        <article>
          <Panel props={this.props.expediaInfo}/>
        </article>
      </div> 
    );
  }
}); 

export default Dashboard;