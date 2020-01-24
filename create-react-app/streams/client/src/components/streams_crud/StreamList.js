import './streams.css';
import React from 'react';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    getList = (params) => {
        if (Object.keys(this.props.streams).length > 0) {
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
                                pathname: "/stream/view",
                                state: {
                                    id: stream.id,
                                    title: stream.title,
                                    description: stream.description
                                }
                            }}
                            className="fa fa-eye fa-2x stream-crud" lol="lolwa"
                        />
                        <Link
                            to={{
                                pathname: "/stream/create",
                                state: {
                                    mode: 'edit',
                                    title: stream.title,
                                    description: stream.description,
                                    id: stream.id
                                },
                                updateStream: params.updateStream
                            }}
                            className="fa fa-edit fa-2x stream-crud primary-light"
                        />
                        <span
                            rowid={stream.id}
                            className="fa fa-trash-alt fa-2x stream-crud secondary-dark"
                            onClick={
                                () => this.props.deleteStream(stream.id)
                            }
                        />
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
                            state: {
                                mode: 'create'
                            },
                            createStream: this.props.createStream,
                            updateStream: this.props.updateStream
                        }}
                        className="fa fa-plus fa-2x stream-add"
                    />
                </div>
                <this.getList
                    streams={this.props.streams}
                    updateStream={this.props.updateStream}
                    id={this.props.streams.id}
                />
            </section>
        );
    }
}

export default StreamList;