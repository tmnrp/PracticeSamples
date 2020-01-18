import React from 'react';
import { connect } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../actions';

class GoogleAuth extends React.Component {
    state = {
        userName: 'Sign in with Google'
    };
    auth2 = null;

    componentDidMount = () => {
        this.processLogon(true);
    };

    processLogon = (byPass) => {
        if (window.gapi && window.gapi.load) {
            if (!window.gapi.auth2) {
                window.gapi.load('client:auth2', () => {
                    window.gapi.client.init({
                        clientId: '200122755711-l49o4rvs7tes5ttnivmk0f7qmj5t85vv.apps.googleusercontent.com',
                        scope: 'email'
                    }).then(() => this.shouldByPassLogon(byPass));
                });
            } else {
                this.shouldByPassLogon(byPass);
            }
        }
    };

    updateUserName = () => {
        if (this.auth2 && this.auth2.isSignedIn.get()) {
            const user = this.auth2.currentUser.get();
            this.setState({
                userName: 'Welcome ' + user.getBasicProfile().getName()
            });
        } else {
            this.setState({
                userName: 'Sign in with google'
            })
        }
    };

    shouldByPassLogon = (byPass) => {
        this.auth2 = window.gapi.auth2.getAuthInstance();
        this.updateUserName();
        if (!byPass) {
            this.doProcessLogon();
        }
    };

    doProcessLogon = () => {
        if (!window.gapi.auth2) {
            this.processLogon();
        }

        this.auth2 = window.gapi.auth2.getAuthInstance();
        if (!this.auth2.isSignedIn.get()) {
            this.auth2.signIn().then(
                // success
                (googleUser) => {
                    // update redux store
                    this.props.setLoggedIn();
                    this.updateUserName();
                },

                // failure
                (error) => {
                    // notify user
                    alert('failed', error);
                }
            );
        } else {
            this.auth2.signOut().then(
                // success
                () => {
                    /// update redux store
                    this.props.setLoggedOut();
                    this.updateUserName();
                },

                // failure
                (error) => {
                    // notify user
                    alert('failed', error);
                }
            );
        }
    };

    /*fetchLogonText = () => {
        if (!this.auth2) {
            this.processLogon(true);
        }
        if (this.auth2 && this.auth2.isSignedIn.get()) {
            const user = this.auth2.currentUser.get();
            return 'Welcome ' + user.getBasicProfile().getName();
        } else {
            return '';
        }
    };*/

    render() {
        return (
            <div className="logon" onClick={() => this.processLogon(false)}>
                <i className="fab fa-google fa-2x secondary-dark"></i>
                <h5>{this.state.userName}</h5>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return state;
};

const mapActionToProps = () => {
    return {
        setLoggedIn: setLoggedIn,
        setLoggedOut: setLoggedOut
    };
};

export default connect(mapStateToProps, mapActionToProps())(GoogleAuth);