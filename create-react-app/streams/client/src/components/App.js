import '../index.css';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar/Navbar';
import { Router, Route } from 'react-router-dom';
import history from './utility/history';
import StreamCreate from './streams_crud/StreamCreate';
import StreamList from './streams_crud/StreamList';
import StreamView from './streams_crud/StreamView';
import StreamDelete from './streams_crud/StreamDelete';
import Modal from './utility/Modal';

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
                        <Route
                            exact
                            path="/stream/delete"
                            component={StreamDelete}
                        />
                    </div>
                </Router>
                <Modal modalConfig={this.props.modalConfig} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {})(App);