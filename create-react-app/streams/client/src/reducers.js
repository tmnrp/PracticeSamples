import { combineReducers } from 'redux';

const isUserLoggedinReducer = (isUserLoggedin = false, action) => {
    if (action.type === 'USER_LOGGED_IN') {
        return true;
    } else if (action.type === 'USER_LOGGED_OUT') {
        return false;
    }
    return isUserLoggedin;
};

export default combineReducers({
    isUserLoggedIn: isUserLoggedinReducer
});