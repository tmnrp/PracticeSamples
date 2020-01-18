import React from 'react';
import Navbar from './navbar/Navbar';
import { processLogon } from './GoogleAuth';


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        );
    };
}

export default App;