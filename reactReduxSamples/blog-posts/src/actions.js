import { jsonPlaceHolderAxios } from './api';

// fetchPosts
export const fetchPosts = (posts) => {
    return function (dispatch, getState) {
        const response = jsonPlaceHolderAxios.get('/posts');
        response.then((response) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: response.data
            });
        });

    };
};