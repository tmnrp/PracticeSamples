import { jsonPlaceHolderAxios } from './api';

export const fetchPosts = () => {
    return (dispatch, getState) => {
        const response = jsonPlaceHolderAxios.get('/posts');
        response.then((response) => {
            const data = Array.isArray(response.data) ? response.data : [response.data];
            dispatch({
                type: 'FETCH_POSTS',
                payload: data
            });
        });
    };
};

export const getUsers = (userId) => {
    return (dispatch, getState) => {
        jsonPlaceHolderAxios.get('/users/' + userId).then((response) => {
            dispatch({
                type: 'GET_USERS',
                payload: response.data
            });
        });
    };
};