import { combineReducers } from 'redux';
import Home from './homeReducer.js';
import Class from './classReducer.js';
import ClassDetail from './classDetailReducer.js';

export default rootReducer = combineReducers({
    Home,
    Class,
    ClassDetail
})