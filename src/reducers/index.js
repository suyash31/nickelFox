import { combineReducers } from 'redux';
import sourceReducer from './sourceReducer';
import codeReducer from './codeReducer';

export default combineReducers({
    sources: sourceReducer,
    codes: codeReducer
});

