import './streams.css';
import React from 'react';
import axios from '../utility/apis';
import { Link, Redirect } from 'react-router-dom';

class StreamList extends React.Component {

    _isMounted = false;

    state = {
        streamList: []
    };

    componentDidMount = () => {
        this._isMounted = true;
        axios.get('/streams').then((res) => {
            this.setState({
                streamList: res.data
            });
        });
    };

    componentDidUpdate = () => {
        axios.get('/streams').then((res) => {
            if (this._isMounted) {
                this.setState({
                    streamList: res.data
                });
            }
        });
    };

    componentWillUnmount = () => {
        this._isMounted = false;
    };

    deleteStream = (e) => {
        const rowId = e.target.attributes.rowid.value;
        axios.delete('/streams/' + rowId).then(() => {

        });
    };

    getList = () => {
        return this.state.streamList.map((stream) => {
            return (
                <div className="card" key={stream.id}>
                    <div className="card-info">
                        <span><strong>Title: </strong>{stream.title}</span>
                        <hr />
                        <span><strong>Description: </strong>{stream.description}</span>
                    </div>
                    <Link to="/stream/view" className="fa fa-eye fa-2x stream-crud" />
                    <Link to="/stream/edit" className="fa fa-edit fa-2x stream-crud primary-light" />
                    <span
                        rowid={stream.id}
                        className="fa fa-trash-alt fa-2x stream-crud secondary-dark"
                        onClick={(e) => this.deleteStream(e)}
                    />
                </div>
            );
        });
    };

    render() {
        return (
            <section id="stream-list" className="section-wrap">
                <div className="section-title-wrap">
                    <h1 className="section-title">Create List</h1>
                    <Link to="/stream/create" className="fa fa-plus fa-2x stream-add" />
                </div>
                <this.getList />
            </section>
        );
    }
}

export default StreamList;