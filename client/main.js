import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes/routes.js';

// import Splash from './components/Splash.js';
// import Dashboard from './components/Dashboard.js';
// import NavigationBar from './components/NavigationBar.js';

render (
  <Router history={ browserHistory } routes={ routes } />,
  document.getElementById('splash')
)