import '../../index.css';
import './streams.css';
import React from 'react';
import stream from '../utility/apis';

class StreamCreate extends React.Component {

    state = {
        title: '',
        description: ''
    };

    onSubmitClick = (e) => {
        console.log('title ->', this.state.title);
        console.log('description ->', this.state.description);
        debugger;
        stream.get('/streams').then((res) => {
            console.log(res)
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
        return (
            <section className="section-wrap">
                <h1 className="section-title">Create Stream</h1>
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
                    <a className="util-hlink" onClick={(e) => this.onSubmitClick(e)}>Submit</a>
                </div>
            </section>
        );
    }
}

export default StreamCreate;