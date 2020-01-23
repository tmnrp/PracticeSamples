import '../../index.css';
import './streams.css';
import React from 'react';
import stream from '../utility/apis';
import { Redirect } from 'react-router-dom';

class StreamCreate extends React.Component {

    state = {
        title: '',
        description: '',
        toListView: false
    };

    onSubmitClick = (e) => {
        console.log('title ->', this.state.title);
        console.log('description ->', this.state.description);
        stream.get('/streams').then((res) => {
            stream.post('/streams', {
                id: (res.data.length + 1),
                title: this.state.title,
                description: this.state.description
            }).then((res) => {
                this.setState({
                    toListView: true
                });
            });
        });
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    render() {
        if (this.state.toListView === true) {
            return <Redirect to='/stream/list' />
        }

        return (
            <section id="stream-create" className="section-wrap">
                <div className="section-title-wrap">
                    <h1 className="section-title">Create Stream</h1>
                </div>
                <div className="field-container">
                    <div className="field-wrap">
                        <label htmlFor="title" className="field-label">Title</label>
                        <input
                            className="field-text"
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e) => this.onTitleChange(e)}
                            value={this.state.title}
                            autoComplete="off"
                        />
                        <span className="field-validation">{this.state.titleError}</span>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="description" className="field-label">Description</label>
                        <input
                            className="field-text"
                            type="text"
                            name="description"
                            id="description"
                            onChange={(e) => this.onDescriptionChange(e)}
                            value={this.state.description}
                            autoComplete="off"
                        />
                        <span className="field-validation">{this.state.descriptionError}</span>
                    </div>
                    <div className="submit-wrap">
                        <button className="submit-btn" onClick={(e) => this.onSubmitClick(e)}>Submit</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default StreamCreate;