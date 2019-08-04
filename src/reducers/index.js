import { combineReducers } from 'redux';
import sourceReducer from './sourceReducer';

export default combineReducers({
    sources: sourceReducer,
});

