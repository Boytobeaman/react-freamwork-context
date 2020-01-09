import { combineReducers } from 'redux';
import { todos } from './todos/redux';
import { counterReducer } from './counter/redux';


export default combineReducers({ 
    todos,
    counterReducer
 })