import React from 'react';
import NavBar from './navbar';
import Home from './home';
import Footer from './footer';
import CreateCategory from './createCategory';

class App extends React.Component {
    render() {
        return (
            <div >
                <NavBar />
                <div >
                    <Home />
                    <CreateCategory />
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;