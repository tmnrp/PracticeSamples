import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light" style={{ height: '10vh' }}>
                <a className="navbar-brand" href="#">
                    <img
                        src="../resources/movie.png"
                        className="d-inline-block align-top"
                        alt=""
                    />Movies DB</a>
            </div>
        );
    };
}

export default Header;