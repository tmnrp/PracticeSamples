import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions';

class IncreDecre extends React.Component {
    render() {
        console.log('increDecre', this.props);
        return (
            <div >
                <label >Increment and Decrement : {this.props.count}</label>
                <div >
                    <button onClick={() => this.props.incrementCount(this.props.count)}>
                        INCREMENT
                    </button>
                    <button onClick={() => this.props.decrementCount(this.props.count)}>
                        DECREMENT
                    </button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapActionToProps = () => {
    return {
        incrementCount: incrementCount,
        decrementCount: decrementCount
    };
};

export default connect(mapStateToProps, mapActionToProps())(IncreDecre);