import React from 'react';
import SideMenu from './SideMenu';
import Dashboard from './dashboard';

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 >Carousel</h1>
                <div class="row">
                    <div class="col-2">
                        <div className="card">
                            <div className="card-body">
                                <SideMenu />
                            </div>
                        </div>
                    </div>
                    <div class="col-10">
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