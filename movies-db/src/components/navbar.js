import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav
                className="navbar navbar-light bg-light"
                style={
                    {
                        height: "30px",
                        justifyContent: "center",
                        alignContent: "center"
                    }
                }
            >
                <h6 >Movies DataBase</h6>
            </nav>
        );
    };
}

export default NavBar;