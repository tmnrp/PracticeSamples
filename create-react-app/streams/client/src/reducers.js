import { combineReducers } from 'redux';

const isUserLoggedinReducer = (isUserLoggedin = false, action) => {
    if (action.type === 'USER_LOGGED_IN') {
        return true;
    } else if (action.type === 'USER_LOGGED_OUT') {
        return false;
    }
    return isUserLoggedin;
};

const streamsReducer = (streams = {}, action) => {
    if (action.type === 'GET_ALL_STREAMS') {
        return action.payload;
    }
    return streams;
};

export default combineReducers({
    isUserLoggedIn: isUserLoggedinReducer,
    streams: streamsReducer
});