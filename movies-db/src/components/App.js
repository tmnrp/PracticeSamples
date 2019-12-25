import React from 'react';
import NavBar from './navbar';
import Home from './home';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <div >
                <NavBar />
                <div >
                    <Home />
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;