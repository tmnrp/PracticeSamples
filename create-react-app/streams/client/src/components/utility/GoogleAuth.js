import React from 'react';
import { connect } from 'react-redux';
import { setLoggedIn, setLoggedOut, setUserName, setUserId } from '../../actions';

class GoogleAuth extends React.Component {
    auth2 = null;
    state = {
        logonText: ''
    };

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

    shouldByPassLogon = (byPass) => {
        this.auth2 = window.gapi.auth2.getAuthInstance();
        this.updateUserDetails();
        if (!byPass) {
            this.doProcessLogon();
        }
    };

    updateUserDetails = (user) => {
        if (this.auth2) {
            const isUserLoggedIn = this.auth2.isSignedIn.get();
            if (isUserLoggedIn) {
                if (!user) {
                    user = this.auth2.currentUser.get();
                }
                this.props.setLoggedIn();
                this.props.setUserId(user.getId());
                this.props.setUserName(user.getBasicProfile().getName());
                this.setState({
                    logonText: 'Welcome : '
                });
            } else {
                this.props.setLoggedOut();
                this.props.setUserId();
                this.props.setUserName();
                this.setState({
                    logonText: 'Sign in with Google'
                });
            }
        }
    };

    doProcessLogon = () => {
        if (!window.gapi.auth2) {
            this.processLogon();
        }

        if (!this.props.usersInfo.isUserLoggedIn) {
            this.auth2.signIn().then(
                // success
                (googleUser) => {
                    // update redux store
                    this.updateUserDetails(googleUser);
                },

                // failure
                (error) => {
                    // notify user
                    console.log('failed', error);
                }
            );
        } else {
            this.auth2.signOut().then(
                // success
                () => {
                    /// update redux store
                    this.updateUserDetails();
                },

                // failure
                (error) => {
                    // notify user
                    console.log('failed', error);
                }
            );
        }
    };

    render() {
        return (
            <div className="logon-wrap">
                <i className="logon-icon fab fa-google fa-2x secondary-dark"></i>
                <h5 className="logon-text">{this.state.logonText + (this.props.usersInfo.userName || '')}</h5>
                <div className="logon-btn" onClick={() => this.processLogon(false)}>
                    {this.props.usersInfo.isUserLoggedIn ? "Log-out" : "Log-in"}
                </div>
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
        setLoggedOut: setLoggedOut,
        setUserName: setUserName,
        setUserId: setUserId
    };
};

export default connect(mapStateToProps, mapActionToProps())(GoogleAuth);