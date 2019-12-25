import { combineReducers } from 'redux';

const moviesDataReducer = (moviesData = [], action) => {
    if (action.type === 'SET_MOVIES_DATA') {
        return action.payload;
    }
    return moviesData;
};

export default combineReducers({
    moviesData: moviesDataReducer
});