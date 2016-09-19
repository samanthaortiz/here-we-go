import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import posts from'./posts';
import expediaInfo from './expediaInfo'; 

const rootReducer = combineReducers({expediaInfo, routing: routerReducer });

export default rootReducer;