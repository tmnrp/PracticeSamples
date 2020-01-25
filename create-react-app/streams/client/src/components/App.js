import '../index.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import { Router, Route } from 'react-router-dom';
import history from './utility/history';
import StreamCreate from './streams_crud/StreamCreate';
import StreamList from './streams_crud/StreamList';
import StreamView from './streams_crud/StreamView';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Navbar />
                    <div>
                        <Route
                            exact
                            path="/stream/list"
                            component={StreamList}
                        />
                        <Route
                            exact
                            path="/stream/view"
                            component={StreamView}
                        />
                        <Route
                            exact
                            path="/stream/create"
                            component={
                                () => <StreamCreate
                                    mode='create'
                                    history={history}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/stream/edit"
                            component={StreamCreate}
                        />
                    </div>
                </Router>
            </div>
        );
    };
}

export default App;