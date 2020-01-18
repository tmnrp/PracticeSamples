export const gapiSignin = () => {
    processLogon('login');
};

export const gapiSignout = () => {
    processLogon('logout');
};

const initGApi = (mode, successCallBack) => {
    if (!window.gapi.auth2 && window.gapi && window.gapi.load) {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '200122755711-l49o4rvs7tes5ttnivmk0f7qmj5t85vv.apps.googleusercontent.com',
                scope: 'email'
            });

            // initial process
            processLogon(mode, successCallBack);
        });
    }
};

const processLogon = (mode, successCallBack) => {
    if (window.gapi.auth2) {
        const auth2 = window.gapi.auth2.getAuthInstance();
        if (mode === 'login') {
            auth2.signIn().then(successCallBack);
        } else if (mode === 'logout') {
            auth2.signOut().then(successCallBack);
        }
    } else {
        initGApi(mode, successCallBack);
    }
};