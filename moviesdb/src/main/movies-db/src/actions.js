import { moviesAxios } from './api/moviesDBApi';

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