import { combineReducers } from 'redux';

const usersInfoReducer = (usersInfo = {}, action) => {
    switch (action.type) {
        case 'SET_LOGGED_IN':
            return { ...usersInfo, isUserLoggedIn: true };
        case 'SET_LOGGED_OUT':
            return { ...usersInfo, isUserLoggedIn: false };
        case 'SET_USER_NAME':
            return { ...usersInfo, userName: action.payload };
        case 'SET_USER_ID':
            return { ...usersInfo, userId: action.payload };
        default:
            return { ...usersInfo }
    }
};

const getAllStreamsReducer = (streams = {}, action) => {
    if (action.type === 'GET_ALL_STREAMS') {
        return action.payload;
    }
    return streams;
};

const displayModalReducer = (shouldDisplayModal = false, action) => {
    if (action.type === 'SHOULD_DISPLAY_MODAL') {
        return action.payload;
    }
    return shouldDisplayModal;
};

export default combineReducers({
    usersInfo: usersInfoReducer,
    streams: getAllStreamsReducer,
    displayModal: displayModalReducer
});