import './Navbar.css';
import React from 'react';
import { connect } from 'react-redux';
import { processLogon } from '../../actions';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar" className="bg-dark light">
                <div className="container">
                    <div className="logo">
                        <i className="fas fa-anchor fa-2x primary-light"></i>
                        <h3><span className="primary-light">Tony</span>Martin</h3>
                    </div>
                    <div>
                        <i
                            className="logon fab fa-google fa-2x secondary-dark"
                            onClick={
                                () => this.props.processLogon('login')
                            }
                        >
                        </i><a class="google-logon">Sign-in with google</a>
                    </div>
                    <ul className="menu">
                        <li className="item"><span>Home</span></li>
                        <li className="item"><span>About Us</span></li>
                        <li className="item"><span>Contact</span></li>
                    </ul>
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
        processLogon: processLogon
    };
};
export default connect(mapStateToProps, mapActionToProps())(Navbar);