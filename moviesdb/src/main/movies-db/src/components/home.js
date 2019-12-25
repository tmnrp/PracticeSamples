import React from 'react';

import { connect } from 'react-redux';
import { setMoviesData } from '../actions';
import Carousel from './carousel';
import SideMenu from './SideMenu';
import Dashboard from './dashboard';

class Home extends React.Component {

    componentDidMount = () => {
        this.props.setMoviesData();
    };

    render() {
        return (
            <div className="container-fluid">
                <Carousel moviesData={this.props.moviesData} />
                <div className="row no-gutters">
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <SideMenu />
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="card">
                            <div className="card-body">
                                <Dashboard moviesData={this.props.moviesData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        moviesData: state.moviesData
    };
};
const mapActionToProps = () => {
    return {
        setMoviesData: setMoviesData
    };
};
export default connect(mapStateToProps, mapActionToProps())(Home);