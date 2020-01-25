import './streams.css';
import React from 'react';
import { connect } from 'react-redux';
import { createStreamHandler, updateStreamHandler } from '../../actions';

class StreamCreate extends React.Component {

    mode;
    onBtnClick;
    state = {
        title: '',
        description: ''
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

    componentDidMount = () => {
        if (this.props.location) {
            this.mode = this.props.location.state.mode;
            this.setState({
                title: this.props.location.state.title,
                description: this.props.location.state.description
            });
        } else {
            this.mode = this.props.mode;
        }
        this.onBtnClick = this.mode === 'create' ? this.props.createStreamHandler : this.props.updateStreamHandler;
    };

    render() {
        return (
            <section id="stream-create" className="section-wrap">
                <div className="section-title-wrap">
                    <h1 className="section-title">{this.mode === 'edit' ? 'Edit' : 'Create'} Stream</h1>
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
                        <button className="submit-btn" onClick={() => this.onBtnClick({
                            ...this.state,
                            userId: this.props.usersInfo.userId,
                            id: this.props.location ? this.props.location.state.id : null
                        }, this.props.history)}>
                            {this.mode === 'edit' ? 'Save' : 'Submit'}
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapActionToProps = () => {
    return {
        createStreamHandler: createStreamHandler,
        updateStreamHandler: updateStreamHandler
    };
};

export default connect(mapStateToProps, mapActionToProps())(StreamCreate);