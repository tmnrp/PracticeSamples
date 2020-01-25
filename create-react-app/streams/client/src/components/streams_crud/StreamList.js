import './streams.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllStreamsHandler, deleteStreamHandler } from '../../actions';

class StreamList extends React.Component {
    count = 0;

    componentDidMount = () => {
        this.props.getAllStreamsHandler();
    };

    componentDidUpdate = () => {
        if (this.count > 0) {
            this.count = 0;
            this.props.getAllStreamsHandler();
        }
    };

    getList = () => {
        if (this.props.streams.length > 0) {
            return this.props.streams.map((stream) => {
                return (
                    <div className="card" key={stream.id}>
                        <div className="card-info">
                            <span><strong>Title: </strong>{stream.title}</span>
                            <hr />
                            <span><strong>Description: </strong>{stream.description}</span>
                        </div>
                        <Link
                            to={{
                                pathname: `/stream/view`,
                                state: {
                                    title: stream.title,
                                    description: stream.description,
                                    userId: stream.userId
                                }
                            }}
                            className="fa fa-eye fa-2x stream-crud"
                        />
                        {
                            (!(stream.userId === '') && this.props.usersInfo.userId === stream.userId) ?
                                <>
                                    <Link
                                        to={{
                                            pathname: "/stream/edit",
                                            state: {
                                                mode: 'edit',
                                                title: stream.title,
                                                description: stream.description,
                                                id: stream.id
                                            }
                                        }}
                                        className="fa fa-edit fa-2x stream-crud primary-light"
                                    />
                                    <span
                                        rowid={stream.id}
                                        className="fa fa-trash-alt fa-2x stream-crud secondary-dark"
                                        onClick={
                                            () => {
                                                this.count = 1;
                                                this.props.deleteStreamHandler(stream.id, this.props.history)
                                            }
                                        }
                                    />
                                </>
                                :
                                <></>
                        }
                    </div>
                );
            });
        } else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    };

    render() {
        return (
            <section id="stream-list" className="section-wrap">
                <div className="section-title-wrap">
                    <h1 className="section-title">Create List</h1>
                    <Link
                        to={{
                            pathname: "/stream/create",
                            usersInfo: this.props.usersInfo
                        }}
                        className="fa fa-plus fa-2x stream-add"
                    />
                </div>
                <this.getList />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapActionToProps = () => {
    return {
        getAllStreamsHandler: getAllStreamsHandler,
        deleteStreamHandler: deleteStreamHandler
    };
};

export default connect(mapStateToProps, mapActionToProps())(StreamList);