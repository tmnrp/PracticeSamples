import streamAxios from './components/utility/apis';

export const setLoggedIn = () => {
    return {
        type: 'USER_LOGGED_IN'
    };
};

export const setLoggedOut = () => {
    return {
        type: 'USER_LOGGED_OUT'
    };
};

export const getAllStreamsHandler = () => {
    return (dispatch, getState) => {
        streamAxios.get('/streams').then((res) => {
            dispatch({
                type: 'GET_ALL_STREAMS',
                payload: res.data
            });
        });
    };
};

export const deleteStreamHandler = (id) => {
    return (dispatch) => {
        streamAxios.delete(`/streams/${id}`).then((res) => {
            dispatch({
                type: 'DELETE_STREAM'
            });
        });
    };
};

export const createStreamHandler = (state) => {
    const { id, title, description } = state;
    return (dispatch) => {
        streamAxios.post(`/streams`, {
            id: id,
            title: title,
            description: description
        }).then((res) => {
            dispatch({
                type: 'CREATE_STREAM'
            });
        });
    };
};

export const updateStreamHandler = (state) => {
    const { id, title, description } = state;
    return (dispatch) => {
        streamAxios.put(`/streams/${id}`, {
            title: title,
            description: description
        }).then((res) => {
            dispatch({
                type: 'UPDATE_STREAM'
            });
        });
    };
};