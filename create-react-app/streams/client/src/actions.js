import streamAxios from './components/utility/apis';

export const setLoggedIn = () => {
    return {
        type: 'SET_LOGGED_IN'
    };
};

export const setLoggedOut = () => {
    return {
        type: 'SET_LOGGED_OUT'
    };
};

export const setUserName = (userName) => {
    return {
        type: 'SET_USER_NAME',
        payload: userName || ''
    };
};

export const setUserId = (userid) => {
    return {
        type: 'SET_USER_ID',
        payload: userid || ''
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

export const deleteStreamHandler = (id, history) => {
    return (dispatch) => {
        streamAxios.delete(`/streams/${id}`).then((res) => {
            dispatch({
                type: 'DELETE_STREAM'
            });
            history.push('/stream/list');
        });
    };
};

export const createStreamHandler = (state, history) => {
    const { title, description, userId } = state;
    return (dispatch) => {
        streamAxios.post(`/streams`, {
            title: title,
            description: description,
            userId: userId
        }).then((res) => {
            dispatch({
                type: 'CREATE_STREAM'
            });
            history.push('/stream/list');
        });
    };
};

export const updateStreamHandler = (state, history) => {
    const { id, title, description, userId } = state;
    return (dispatch) => {
        streamAxios.put(`/streams/${id}`, {
            title: title,
            description: description,
            userId: userId
        }).then((res) => {
            dispatch({
                type: 'UPDATE_STREAM'
            });
            history.push('/stream/list');
        });
    };
};

export const displayModalHandler = (shouldDisplayModal) => {
    return {
        type: 'SHOULD_DISPLAY_MODAL',
        payload: shouldDisplayModal
    };
};

export const setModalConfigHandler = (modalConfig) => {
    return {
        type: 'SET_MODAL_CONFIG',
        payload: modalConfig
    };
};