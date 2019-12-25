import React from 'react';

import Carousel from './carousel';
import SideMenu from './SideMenu';
import Dashboard from './dashboard';

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel />
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
                                <Dashboard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;