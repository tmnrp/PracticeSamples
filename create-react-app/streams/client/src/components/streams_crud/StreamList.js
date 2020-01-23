import './streams.css';
import React from 'react';
import axios from '../utility/apis';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    state = {
        streamList: []
    };

    componentDidMount = () => {
        axios.get('/streams').then((res) => {
            this.setState({
                streamList: res.data
            });
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
                    <Link to="" className="fa fa-eye fa-2x view-details" />
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