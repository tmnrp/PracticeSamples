import { jsonPlaceHolderAxios } from './api';

export const fetchPosts = () => {
    return (dispatch, getState) => {
        const response = jsonPlaceHolderAxios.get('/posts');
        response.then((response) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: response.data
            });
        });
    };
};