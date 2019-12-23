import React from 'react';

import Header from './header';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (<div >
            <Header />
            <div style={{height: '70vh'}}>
                App
            </div>
            <Footer />
        </div>);
    };
}

export default App;