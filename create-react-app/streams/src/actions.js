import { gapiSignin } from './components/GoogleAuth';

export const processLogon = (mode) => {
    return (dispatch, getState) => {
        gapiSignin(() => {
            dispatch({
                type: (mode === 'login') ? 'LOGGED_IN' : 'LOGGED_OUT',
                payload: (mode === 'login') ? true : false
            });
        });
    };
};