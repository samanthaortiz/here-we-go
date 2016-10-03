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

import Account from './components/Account.js';

// TRIP BUDGET FORM PAGE
import BudgetForm from './components/BudgetForm';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={Splash} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="formBudget" component={BudgetForm} />
        <Route path="account" component={Dashboard} />
        <Route path="account" component={Splash} />
        <Route path="logout" component={Splash} />
        <Route path="*" component={Master} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
