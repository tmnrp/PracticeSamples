import { combineReducers } from 'redux';

const moviesDataReducer = (moviesData = [], action) => {
    if (action.type === 'SET_MOVIES_DATA') {
        return action.payload;
    }
    return moviesData;
};

const categoriesDataReducer = (categoriesData = [], action) => {
    if (action.type === 'SET_CATEGORIES_DATA') {
        return action.payload;
    }
    return categoriesData;
};

export default combineReducers({
    moviesData: moviesDataReducer,
    categoriesData: categoriesDataReducer
});