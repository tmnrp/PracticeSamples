import './Navbar.css';
import React from 'react';
import { connect } from 'react-redux';
import GoogleAuth from '../utility/GoogleAuth';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar" className="bg-dark light">
                <div className="container">
                    <div className="logo">
                        <i className="fas fa-anchor fa-2x primary-light"></i>
                        <h3><span className="primary-light">Tony</span>Martin</h3>
                    </div>
                    <GoogleAuth />
                    <ul className="menu">
                        <li className="item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="item">
                            <span>
                                <Link to="/stream/list">Streams</Link>
                            </span>
                        </li>
                        <li className="item"><span>About Us</span></li>
                        <li className="item"><span>Contact</span></li>
                    </ul>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        logonText: state.logonText,
        isUserLoggedIn: state.isUserLoggedIn
    };
};
export default connect(mapStateToProps, {})(Navbar);