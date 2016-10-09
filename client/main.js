import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// APP PAGE <== ENTRY POINT TO APPLICATION
import Master from './components/Master.js';
// SPLASH PAGE
import Splash from './components/Splash.js';
// DASHBOARD PAGE
import Dashboard from './components/Dashboard.js';
// DASHBOARD PAGE
import NavBar from './components/NavigationBar.js';
// LOGIN ACCOUNT
import Account from './components/Account.js';
// BUDGET CHART (D3)
//import BudgetChart from './components/BudgetChart.js';
//ITINERARY
import Itinerary from './components/Itinerary.js';
//HOTEL ITIN
import HotelItin from './components/HotelItin.js';
//FLIGHT ITIN
import FlightItin from './components/FlightItin.js';
//CAR ITIN
import CarItin from './components/CarItin.js';
//ACTIVITY ITIN
import ActivityItin from './components/ActivityItin.js';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={Splash} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="account" component={Dashboard} />
        <Route path="account" component={Splash} />
        <Route path="logout" component={Splash} />
        {/*<Route path="chart" component={BudgetChart} />*/}
        <Route path="dashboard" component={Itinerary} />
        <Route path="dashboard" component={HotelItin} />
        <Route path="dashboard" component={FlightItin} />
        <Route path="dashboard" component={CarItin} />
        <Route path="dashboard" component={ActivityItin} />
        <Route path="*" component={Master} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
