import React from 'react';

class StreamView extends React.Component {

    render() {
        return (
            <section id="stream-view" className="section-wrap">
                <div className="section-title-wrap">
                    <h1 className="section-title">View Stream</h1>
                </div>
                <div className="view-container">
                    <div className="title">Title : {this.props.location.state.title}</div>
                    <hr />
                    <div className="title">Description : {this.props.location.state.description}</div>
                </div>
            </section>
        );
    }
}

export default StreamView;