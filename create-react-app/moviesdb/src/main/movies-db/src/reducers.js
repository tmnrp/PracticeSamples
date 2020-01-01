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

const categoryModalModeReducer = (categoryModalMode = '', action) => {
    if (action.type === 'SET_CATEGORY_MODAL_MODE') {
        return action.payload;
    }
    return categoryModalMode;
};

export default combineReducers({
    moviesData: moviesDataReducer,
    categoriesData: categoriesDataReducer,
    categoryModalMode: categoryModalModeReducer
});