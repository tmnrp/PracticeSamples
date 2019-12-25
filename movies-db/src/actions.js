import { getMoviesData } from './data/movies';

export const setMoviesData = () => {
    const moviesData = getMoviesData();
    return {
        type: 'SET_MOVIES_DATA',
        payload: moviesData
    };
};