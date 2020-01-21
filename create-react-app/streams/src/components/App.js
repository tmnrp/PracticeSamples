import React from 'react';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import StreamCreate from './streams_crud/StreamCreate';
import StreamEdit from './streams_crud/StreamEdit';
import StreamList from './streams_crud/StreamList';
import StreamView from './streams_crud/StreamView';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <BrowserRouter >
                    <div>
                        <Route exact path="/stream/create" component={StreamCreate} />
                        <Route exact path="/stream/list" component={StreamList} />
                        <Route exact path="/stream/edit" component={StreamEdit} />
                        <Route exact path="/stream/view" component={StreamView} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;