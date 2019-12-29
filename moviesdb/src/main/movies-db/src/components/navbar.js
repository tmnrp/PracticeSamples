import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Movies DB</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{ justifyContent: "flex-end" }}
                >
                    <div className="nav navbar-nav navbar-right">
                        <button className="btn btn-primary">Add Movie</button>
                    </div>
                </div>
            </nav>
        );
    };
}

export default NavBar;