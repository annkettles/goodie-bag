import {combineReducers} from 'redux';
import candiesReducer from './candies';

const rootReducer = combineReducers({
	candies: candiesReducer
});

export default rootReducer;
