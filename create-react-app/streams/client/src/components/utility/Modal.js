import './Modal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { displayModalHandler } from '../../actions';

class Modal extends React.Component {
    render() {
        const { title, description, onYesClickHandler } = this.props.modalCofig;
        return (this.props.displayModal) ? ReactDOM.createPortal(
            <div
                className="modal"
                onClick={() => this.props.displayModalHandler(false)}
            >
                <div className="modal-container" onClick={(e) => { e.stopPropagation() }}>
                    <div className="modal-title">{title}</div>
                    <hr className="modal-hr" />
                    <div className="modal-body">
                        <div className="modal-content">
                            {description}
                        </div>
                    </div>
                    <hr className="modal-hr" />
                    <div className="modal-footer">
                        <button onClick={
                            (e) => onYesClickHandler(e)
                        }>Yes</button>
                        <button onClick={() => this.props.displayModalHandler(false)}>No</button>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        ) : <></>;
    };
};

const mapStateToProps = (state) => {
    return {
        displayModal: state.displayModal,
        modalCofig: state.modalCofig
    };
};

const mapActionToProps = () => {
    return {
        displayModalHandler: displayModalHandler
    };
};
export default connect(mapStateToProps, mapActionToProps())(Modal);