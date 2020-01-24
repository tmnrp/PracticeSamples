import React from 'react';
import Navbar from './navbar/Navbar';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import StreamCreate from './streams_crud/StreamCreate';
import StreamEdit from './streams_crud/StreamEdit';
import StreamList from './streams_crud/StreamList';
import StreamView from './streams_crud/StreamView';
import { getAllStreamsHandler, deleteStreamHandler, createStreamHandler, updateStreamHandler } from '../actions';

const history = createBrowserHistory();

class App extends React.Component {
    componentDidMount = () => {
        this.props.initAllStreams();
    };

    render() {
        return (
            <div>
                <Router history={history}>
                    <Navbar />
                    <div>
                        <Route exact path="/stream/create" component={StreamCreate} />
                        <Route
                            exact
                            path="/stream/list"
                            component={() =>
                                <StreamList
                                    streams={this.props.streams}
                                    mode='create'
                                    deleteStream={this.props.deleteStream}
                                    createStream={this.props.createStream}
                                    updateStream={this.props.updateStream}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/stream/edit"
                            component={() =>
                                <StreamEdit
                                    mode='edit'
                                />
                            }
                        />
                        <Route exact path="/stream/view" component={StreamView} />
                    </div>
                </Router>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return state;
};

const mapActionToProps = () => {
    return {
        initAllStreams: getAllStreamsHandler,
        deleteStream: deleteStreamHandler,
        createStream: createStreamHandler,
        updateStream: updateStreamHandler
    };
}

export default connect(mapStateToProps, mapActionToProps())(App);