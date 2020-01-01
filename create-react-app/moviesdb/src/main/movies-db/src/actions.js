import { moviesDBAxios } from './api/moviesDBApi';

export const setCategoriesData = () => {
    return (dispatch, getState) => {
        const response = moviesDBAxios.get('/getAllCategories');
        response.then((res) => {
            dispatch({
                type: 'SET_CATEGORIES_DATA',
                payload: res.data
            });
        });
    };
};

export const setMoviesData = () => {
    return (dispatch, getState) => {
        const response = moviesDBAxios.get('/getAllMovies');
        response.then((res) => {
            dispatch({
                type: 'SET_MOVIES_DATA',
                payload: res.data
            });
        });
    };
};

export const setCategoryModalMode = (categoryModalMode) => {
    return {
        type: 'SET_CATEGORY_MODAL_MODE',
        payload: categoryModalMode
    };
};