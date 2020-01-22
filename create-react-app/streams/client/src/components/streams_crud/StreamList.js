import './streams.css';
import React from 'react';
import axios from '../utility/apis';

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
                    <span><strong>Title: </strong>{stream.title}</span>
                    <hr/>
                    <span><strong>Description: </strong>{stream.description}</span>
                </div>
            );
        });
    };

    render() {
        return (
            <section className="section-list">
                <h1>Stream List</h1>
                <this.getList />
            </section>
        );
    }
}

export default StreamList;