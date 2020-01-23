import '../../index.css';
import './streams.css';
import React from 'react';
import stream from '../utility/apis';
import { Redirect } from 'react-router-dom';

class StreamCreate extends React.Component {

    componentDidMount = () => {
        if (this.props.location.state) {
            this.setState({
                mode: 'edit',
                streamid: this.props.location.state.id,
                title: this.props.location.state.title,
                description: this.props.location.state.description
            });
        }
    };

    state = {
        streamid: undefined,
        title: '',
        description: '',
        toListView: false,
        mode: 'create'
    };

    onSubmitClick = (e) => {
        console.log('title ->', this.state.title);
        console.log('description ->', this.state.description);
        debugger;
        stream.get('/streams').then((res) => {
            if (this.state.mode === 'edit') {
                stream.put('/streams/' + this.state.streamid, {
                    title: this.state.title,
                    description: this.state.description
                }).then((res) => {
                    this.setState({
                        toListView: true
                    });
                });
            } else {
                stream.post('/streams', {
                    id: (res.data.length + 1),
                    title: this.state.title,
                    description: this.state.description
                }).then((res) => {
                    this.setState({
                        toListView: true
                    });
                });
            }
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
                    <h1 className="section-title">{this.state.mode === 'edit' ? 'Edit' : 'Create'} Stream</h1>
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
                        <button className="submit-btn" onClick={(e) => this.onSubmitClick(e)}>
                            {this.state.mode === 'edit' ? 'Save' : 'Submit'}
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default StreamCreate;