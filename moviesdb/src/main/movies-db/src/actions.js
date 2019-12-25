import { categoryAxios, moviesAxios } from './api/moviesDBApi';

export const setCategoriesData = () => {
    return (dispatch, getState) => {
        const response = categoryAxios.get('/getAllCategories');
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
        const response = moviesAxios.get('/getAllMovies');
        response.then((res) => {
            dispatch({
                type: 'SET_MOVIES_DATA',
                payload: res.data
            });
        });
    };
};