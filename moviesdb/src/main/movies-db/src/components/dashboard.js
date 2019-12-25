import React from 'react';
import MoviesList from './moviesList';

class Dashboard extends React.Component {
    render() {
        return (
            <div >
                Dashboard
                <MoviesList moviesData={this.props.moviesData} />
            </div>
        );
    };
}

export default Dashboard;