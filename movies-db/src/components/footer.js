import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark" style={{ height: '20vh' }}>
                <a className="navbar-brand" href="#">
                    <img
                        src="../resources/movie.png"
                        className="d-inline-block align-top"
                        alt=""
                    />Footer</a>
            </div>
        );
    };
}

export default Footer;