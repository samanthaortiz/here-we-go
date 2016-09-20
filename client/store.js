import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//data = api call
import expediaInfo from './data/dummyData'

//create an obj for default data

const defaultState = {
  expediaInfo
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;