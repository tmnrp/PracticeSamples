import { combineReducers } from 'redux';

const userLoggedInReducer = (isUserLoggedIn = false, action) => {
    if (action.type === 'LOGGED_IN') {
        return true;
    } else if (action.type === 'LOGGED_OUT') {
        return false;
    }
    return isUserLoggedIn;
};

export default combineReducers({
    isUserLoggedIn: userLoggedInReducer
});