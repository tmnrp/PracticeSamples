import '../../index.css';
import './streams.css';
import React from 'react';

class StreamCreate extends React.Component {

    render() {
        return (
            <section className="section-wrap">
                <h1 className="section-title">Create Stream</h1>
                <div className="field-wrap">
                    <label htmlFor="title" className="field-label">Title</label>
                    <input className="field-text" type="text" name="title" id="title" />
                </div>
                <div className="field-wrap">
                    <label htmlFor="description" className="field-label">Description</label>
                    <input className="field-text" type="text" name="description" id="description" />
                </div>
                <div className="submit-wrap">
                    <a className="util-hlink">Submit</a>
                </div>
            </section>
        );
    }
}

export default StreamCreate;